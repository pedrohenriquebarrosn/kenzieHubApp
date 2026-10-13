import { test, expect } from '@playwright/test';
const url='https://kenziehub-qfwq-1t4g54hzs-pedrohenriquebarrosns-projects.vercel.app/';
for (const width of [1280,390]) {
  test('live release guest CRUD and persistence in PT at '+width+'px',async({page})=>{
    const errors=[];page.on('pageerror',error=>errors.push(error.message));
    await page.setViewportSize({width,height:width===390?844:900});
    const response=await page.goto(url+'?lang=pt',{waitUntil:'domcontentloaded',timeout:25000});
    expect(response.status()).toBe(200);
    await page.getByRole('button',{name:'Acessar demonstração'}).click();
    await expect(page.getByText(/Demonstração local:/)).toBeVisible();
    await page.locator('.titleTechs button').click();
    await page.getByPlaceholder('Digite aqui o nome da tecnologia').fill('PlaywrightRelease');
    await page.getByRole('button',{name:'Cadastrar Tecnologia'}).click();
    await expect(page.getByText('PlaywrightRelease',{exact:true})).toBeVisible();
    await page.getByRole('button',{name:/PlaywrightRelease/}).click();
    await page.getByPlaceholder('Material UI').fill('TypeScriptRelease');
    await page.getByRole('button',{name:'Salvar alterações'}).click();
    await expect(page.getByText('TypeScriptRelease',{exact:true})).toBeVisible();
    await page.reload();
    await expect(page.getByText('TypeScriptRelease',{exact:true})).toBeVisible();
    await page.getByRole('button',{name:/TypeScriptRelease/}).click();
    await page.getByRole('button',{name:'Excluir'}).click();
    await expect(page.getByText('TypeScriptRelease',{exact:true})).toHaveCount(0);
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);
    expect(overflow).toBe(false);
    expect(errors).toEqual([]);
  });
}
test('live release shows English guest mode without login',async({page})=>{
  const response=await page.goto(url+'?lang=en',{waitUntil:'domcontentloaded',timeout:25000});
  expect(response.status()).toBe(200);
  await page.getByRole('button',{name:'Explore demo'}).click();
  await expect(page.getByText(/Local demo:/)).toBeVisible();
  await expect(page.getByRole('heading',{name:/Hello, Guest/})).toBeVisible();
});
