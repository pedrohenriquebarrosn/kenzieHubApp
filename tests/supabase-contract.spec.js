import { test, expect } from '@playwright/test';

// Contract tests exercise the real login and CRUD UI against predictable
// Supabase-compatible HTTP responses. They do NOT claim real hosted Auth delivery.
const cors = {'access-control-allow-origin':'*','content-type':'application/json'};
const user = {id:'a23ccfb1-e61b-4c83-86e2-d81f5182cd77',email:'test.user@example.invalid',
  user_metadata:{name:'Pessoa de Teste',course_module:'Primeiro Módulo'}};
test('authenticated Hub user creates, edits, reloads and deletes server-backed technologies',async({page})=>{
  let technologies=[];
  let authRequests=0;
  await page.route(/\/auth\/v1\/token\?grant_type=password$/,route=>{
    authRequests++;
    return route.fulfill({status:200,headers:cors,body:JSON.stringify({user,access_token:'mock-access-token',refresh_token:'mock-refresh-token'})});
  });
  await page.route(/\/auth\/v1\/user$/,route=>route.fulfill({status:200,headers:cors,body:JSON.stringify(user)}));
  await page.route(/\/auth\/v1\/logout$/,route=>route.fulfill({status:204,headers:cors,body:''}));
  await page.route(/\/rest\/v1\/kenziehub_technologies.*/,route=>{
    const req=route.request(),method=req.method(),params=new URL(req.url()).searchParams;
    let result=[];
    if(method==='GET') result=technologies.map(({id,title,status})=>({id,title,status}));
    if(method==='POST') {
      const input=req.postDataJSON()[0];
      technologies.unshift({id:'9bf97cbd-b1d4-4774-9a2f-d297cf4e9b52',title:input.title,status:input.status});
      result=technologies;
    }
    if(method==='PATCH') {
      const id=params.get('id')?.replace('eq.',''),input=req.postDataJSON();
      technologies=technologies.map(t=>t.id===id?{...t,...input}:t);
      result=technologies.filter(t=>t.id===id);
    }
    if(method==='DELETE') {
      const id=params.get('id')?.replace('eq.','');
      result=technologies.filter(t=>t.id===id).map(t=>({id:t.id}));
      technologies=technologies.filter(t=>t.id!==id);
    }
    return route.fulfill({status:200,headers:cors,body:JSON.stringify(result)});
  });
  await page.goto('/');
  await page.getByLabel('Email').fill('test.user@example.invalid');
  await page.getByLabel('Senha',{exact:true}).fill('VeryStrong#123');
  await page.getByRole('button',{name:'Entrar'}).click();
  await expect(page).toHaveURL(/\/dashboard$/);
  await expect(page.getByRole('heading',{name:'Olá, Pessoa de Teste'})).toBeVisible();
  await page.locator('.titleTechs button').click();
  await page.getByPlaceholder('Digite aqui o nome da tecnologia').fill('React');
  await page.getByRole('button',{name:'Cadastrar Tecnologia'}).click();
  await expect(page.getByText('React',{exact:true})).toBeVisible();
  await page.getByRole('button',{name:/React/}).click();
  await page.getByPlaceholder('Material UI').fill('TypeScript');
  await page.getByRole('button',{name:'Salvar alterações'}).click();
  await expect(page.getByText('TypeScript',{exact:true})).toBeVisible();
  await page.reload();
  await expect(page.getByText('TypeScript',{exact:true})).toBeVisible();
  await page.getByRole('button',{name:/TypeScript/}).click();
  await page.getByRole('button',{name:'Excluir'}).click();
  await expect(page.getByText('TypeScript',{exact:true})).toHaveCount(0);
  expect(authRequests).toBe(1);
  expect(technologies).toHaveLength(0);
});

test('signup communicates SMTP restriction instead of falsely confirming registration',async({page})=>{
  await page.route(/\/auth\/v1\/signup\?redirect_to=/,route=>route.fulfill({
    status:422,headers:cors,body:JSON.stringify({msg:'Email address not authorized'})
  }));
  await page.goto('/register');
  await page.getByLabel('Nome',{exact:true}).fill('Teste Supabase');
  await page.getByLabel('Email').fill('unapproved@example.invalid');
  await page.getByLabel('Senha',{exact:true}).fill('Valid#123Ab');
  await page.getByLabel('Confirmar Senha').fill('Valid#123Ab');
  await page.getByLabel('Bio').fill('Teste de integração');
  await page.getByLabel('Contato').fill('81 912345678');
  await page.getByRole('button',{name:'Cadastrar',exact:true}).click();
  await expect(page.getByText('Email address not authorized')).toBeVisible();
  await expect(page).toHaveURL(/\/register(?:\?lang=(?:pt|en))?$/);
});
