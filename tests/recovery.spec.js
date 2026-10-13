import { test, expect } from '@playwright/test';

test('visitor can manage technologies in the explicitly labeled local demo', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Acessar demonstração' }).click();
  await expect(page.getByText(/Demonstração local:/)).toBeVisible();
  await expect(page.getByRole('heading', { name: /Olá, Visitante/ })).toBeVisible();

  await page.locator('.titleTechs button').click();
  await page.getByPlaceholder('Digite aqui o nome da tecnologia').fill('React');
  await page.getByRole('button', { name: 'Cadastrar Tecnologia' }).click();
  await expect(page.getByText('React', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: /React/ }).click();
  await page.getByPlaceholder('Material UI').fill('TypeScript');
  await page.getByRole('button', { name: 'Salvar alterações' }).click();
  await expect(page.getByText('TypeScript', { exact: true })).toBeVisible();

  await page.reload();
  await expect(page.getByText('TypeScript', { exact: true })).toBeVisible();
  await page.screenshot({ path: 'test-results/kenziehub-demo.png', fullPage: true });

  await page.getByRole('button', { name: /TypeScript/ }).click();
  await page.getByRole('button', { name: 'Excluir' }).click();
  await expect(page.getByText('TypeScript', { exact: true })).toHaveCount(0);

  await page.getByRole('button', { name: 'Sair' }).click();
  await expect(page.getByRole('button', { name: 'Acessar demonstração' })).toBeVisible();
});

test('visitor can access demo on mobile without a login', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Acessar demonstração' }).click();
  await expect(page.getByText(/Demonstração local:/)).toBeVisible();
});
