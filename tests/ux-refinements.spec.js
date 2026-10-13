import { test, expect } from '@playwright/test';

test('login and demo buttons have the same resting and hover states as registration', async ({ page }) => {
  await page.goto('/');
  for (const name of ['Entrar', 'Acessar demonstração']) {
    const button = page.getByRole('button', { name, exact: true });
    await expect(button).toHaveCSS('background-color', 'rgb(89, 50, 63)');
    await button.hover();
    await expect(button).toHaveCSS('background-color', 'rgb(255, 87, 127)');
    await page.mouse.move(0, 0);
    await expect(button).toHaveCSS('background-color', 'rgb(89, 50, 63)');
  }

  await expect(page.getByText('Ou explore o projeto sem criar uma conta real:'))
    .toHaveCSS('color', 'rgb(248, 249, 250)');
  await expect(page.getByText('Os dados da demonstração ficam somente neste navegador.'))
    .toHaveCSS('color', 'rgb(173, 181, 189)');
});

test('registration explains each unmet password requirement while typing', async ({ page }) => {
  await page.goto('/register');
  const password = page.getByLabel('Senha', { exact: true });

  await password.fill('lower123#');
  await expect(page.getByText('Inclua pelo menos 1 letra maiúscula.')).toBeVisible();

  await password.fill('UPPER123#');
  await expect(page.getByText('Inclua pelo menos 1 letra minúscula.')).toBeVisible();

  await password.fill('Uppercase9');
  await expect(page.getByText('Inclua pelo menos 1 caractere especial, como !, @ ou #.')).toBeVisible();

  await password.fill('Strong9@Value');
  await expect(page.getByText('Inclua pelo menos 1 caractere especial, como !, @ ou #.')).toHaveCount(0);
  await expect(page.getByText('Inclua pelo menos 1 letra maiúscula.')).toHaveCount(0);

  // Valid strong passwords must not be rejected for containing the previously prohibited symbols.
  await password.fill('Test9!Long-Password');
  await expect(page.getByText(/A senha precisa possuir/)).toHaveCount(0);
  await expect(page.getByText('Inclua pelo menos 1 caractere especial, como !, @ ou #.')).toHaveCount(0);
});

test('registration accepts contiguous 11-digit mobile number and sends normalized data', async ({ page }) => {
  // This request is fully stubbed: no real account or email is created.
  let sentContact;
  await page.route('https://bzhappkbfjzggghcpxht.supabase.co/**', async route => {
    if (route.request().url().includes('/auth/v1/signup')) {
      sentContact = route.request().postDataJSON()?.data?.contact;
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ user: { id: 'synthetic-user' } }),
      });
      return;
    }
    await route.abort();
  });

  await page.goto('/register');
  await page.getByLabel('Nome').fill('Conta de Exemplo');
  await page.getByLabel('Email').fill('example.invalid@test.invalid');
  await page.getByLabel('Senha', { exact: true }).fill('SafePass9!Long');
  await page.getByLabel('Confirmar Senha').fill('SafePass9!Long');
  await page.getByLabel('Bio').fill('Teste educacional automatizado');
  const contact = page.getByLabel('Contato');
  await contact.fill('999');
  await expect(page.getByText('Digite 11 números: DDD + celular. Ex.: 81999998888.')).toBeVisible();
  await contact.fill('81999998888');
  await expect(page.getByText('Digite 11 números: DDD + celular. Ex.: 81999998888.')).toHaveCount(0);
  await page.getByRole('button', { name: 'Cadastrar', exact: true }).click();
  await expect.poll(() => sentContact).toBe('81999998888');
  await expect(page.getByRole('button', { name: 'Acessar demonstração' })).toBeVisible();
});

test('login password eye matches register eye in color, alignment and show/hide behavior', async ({ page }) => {
  await page.goto('/');
  const loginInput = page.locator('input[name="password"]');
  const loginEye = page.locator('fieldset').filter({ has: loginInput }).getByRole('button');

  await expect(loginEye).toHaveCSS('color', 'rgb(255, 255, 255)');
  await expect(loginEye).toHaveCSS('top', '37px');
  await loginEye.click();
  await expect(loginInput).toHaveAttribute('type', 'text');
  await loginEye.click();
  await expect(loginInput).toHaveAttribute('type', 'password');

  await page.goto('/register');
  const registerInput = page.locator('input[name="password"]');
  const registerEye = page.locator('fieldset').filter({ has: registerInput }).getByRole('button');
  await expect(registerEye).toHaveCSS('color', 'rgb(255, 255, 255)');
  await expect(registerEye).toHaveCSS('top', '37px');
  await registerEye.click();
  await expect(registerInput).toHaveAttribute('type', 'text');
});
