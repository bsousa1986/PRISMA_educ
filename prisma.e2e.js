const { test, expect } = require('@playwright/test');

async function enter(page, roleName) {
  await page.goto('https://bsousa1986.github.io/PRISMA_educ/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.getByRole('button', { name: new RegExp('Área do ' + roleName, 'i') }).click();
  await expect(page.locator('#workspaceContent')).toBeVisible();
}

test('PRISMA — percurso completo do professor', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await enter(page, 'professor');

  await page.locator('[data-tab="curriculo"]').click();
  const main = page.locator('#workspaceContent main.prisma-main');
  await expect(main.getByRole('heading', { name: 'Módulos' })).toBeVisible();
  await expect(page.locator('[data-prisma-unit]').first()).toBeVisible();

  await page.locator('[data-prisma-unit]').first().click();
  await expect(main.getByText('Problema filosófico', { exact: true })).toBeVisible();

  await page.locator('[data-tab="recursos"]').click();
  await expect(main.getByRole('heading', { name: 'Recursos' })).toBeVisible();
  await expect(page.locator('[data-prisma-resource]').first()).toBeVisible();
  await page.locator('[data-prisma-resource]').first().click();
  await expect(main.getByText(/Imprimir|guardar PDF/i).first()).toBeVisible();

  await page.locator('[data-tab="planos"]').click();
  await expect(main.getByRole('heading', { name: 'Planos de aula' })).toBeVisible();

  await page.locator('[data-tab="exercicios"]').click();
  await expect(main.getByRole('heading', { name: 'Exercícios' })).toBeVisible();

  await page.locator('[data-tab="avaliacao"]').click();
  await expect(main.getByRole('heading', { name: 'Avaliação' })).toBeVisible();

  expect(errors, errors.join('\n')).toEqual([]);
});

test('PRISMA — percurso completo do aluno', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await enter(page, 'aluno');

  await page.locator('[data-tab="curriculo"]').click();
  const main = page.locator('#workspaceContent main.prisma-main');
  await expect(main.getByRole('heading', { name: 'Módulos' })).toBeVisible();
  await expect(page.locator('[data-prisma-unit]').first()).toBeVisible();

  await page.locator('[data-prisma-unit]').first().click();
  await expect(main.getByText('Problema filosófico', { exact: true })).toBeVisible();
  await expect(page.locator('[data-hot-create]')).toHaveCount(0);
  await expect(main.getByText(/Modo aluno: podes estudar/i)).toBeVisible();

  await page.locator('[data-tab="biblioteca"]').click();
  await expect(main.getByRole('heading', { name: 'Biblioteca de materiais' })).toBeVisible();
  await expect(page.locator('[data-prisma-resource]').first()).toBeVisible();
  await page.locator('[data-prisma-resource]').first().click();
  await expect(main).toBeVisible();

  await page.locator('[data-tab="progresso"]').click();
  await expect(main).toBeVisible();

  expect(errors, errors.join('\n')).toEqual([]);
});
