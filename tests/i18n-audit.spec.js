const { test, expect } = require("@playwright/test");
test("English sign-in copy and reversible translation", async ({page}) => {
  await page.goto("/?lang=en");
  await expect(page.locator("html")).toHaveAttribute("lang","en");
  await expect(page.getByLabel("Password",{exact:true})).toBeVisible();
  await page.getByRole("button",{name:"Português"}).click();
  await expect(page.getByLabel("Senha",{exact:true})).toBeVisible();
  await page.getByRole("button",{name:"English"}).click();
  await expect(page.getByLabel("Password",{exact:true})).toBeVisible();
});
test("sign-up language switch does not clear a draft",async({page})=>{
  await page.goto("/register?lang=en");
  const name=page.getByLabel("Name",{exact:true});
  await name.fill("An Example");
  await page.getByRole("button",{name:"Português"}).click();
  await expect(page.getByLabel("Nome",{exact:true})).toHaveValue("An Example");
});
