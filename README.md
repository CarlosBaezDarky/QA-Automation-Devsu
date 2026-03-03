# QA Automation Devsu

Este proyecto contiene pruebas automatizadas en **Cypress** para:

- Flujo E2E en SauceDemo.
- Pruebas de APIs en Demoblaze.

---

## 🚀 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/CarlosBaezDarky/QA-Automation-Devsu
   cd QA-Automation-Devsu

npm init -y 
npm install cypress --save-dev


2. Abrir Cypress
npx cypress open

Selecciona E2E Testing.

Elige navegador (Chrome, Edge, etc.).

Corre los archivos .cy.js.

3. Ejecutar en modo headless (CI/CD)
npx cypress run --spec "E2E/saucedemo_purchase.cy.js"
npx cypress run --spec "APIs/demoblaze_api.cy.js"
