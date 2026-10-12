import { test, expect } from '@playwright/test';

// Simulate GoTrue returning to the registered app URL after email confirmation.
// This is an HTTP contract test, not an actual confirmation email delivery test.
test('Hub handles signup confirmation tokens, clears URL fragment and opens dashboard',async({page})=>{
  const headers={'access-control-allow-origin':'*','content-type':'application/json'};
  await page.route(/\/auth\/v1\/user$/,route=>route.fulfill({
    status:200,headers,body:JSON.stringify({id:'ed014131-0104-471c-a79a-ec645335970d',email:'confirmed@example.invalid',user_metadata:{name:'Confirmado',course_module:'Primeiro Módulo'}})
  }));
  await page.route(/\/rest\/v1\/kenziehub_technologies.*/,route=>route.fulfill({status:200,headers,body:'[]'}));
  await page.goto('/#access_token=contract-access&refresh_token=contract-refresh&type=signup&token_type=bearer');
  await expect(page).toHaveURL(/\/dashboard$/);
  await expect(page.getByRole('heading',{name:'Olá, Confirmado'})).toBeVisible();
  const stored=await page.evaluate(()=>JSON.parse(localStorage.getItem('kenzie_hub_auth_v1')||'null'));
  expect(stored?.access_token).toBe('contract-access');
  expect(new URL(page.url()).hash).toBe('');
});
