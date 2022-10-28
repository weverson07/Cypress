#cypress

**Baixe o projeto no Github:**

https://github.com/weverson07/cypress

***Instalação do cypress:***

npm install cypress --save-dev

Em alguns casos será necessário executar o comando abaixo:

~~run npm init~~

**Dúvidas:**
https://docs.cypress.io

**Links úteis:**
- Allure Docs - https://docs.qameta.io/allure/
- Cypress Allure Plugin - https://www.npmjs.com/package/@shelex/cypress-allure-plugin
- npx - https://www.npmjs.com/package/npx
- npm-run-all - https://www.npmjs.com/package/npm-run-all

O teste realizado se encontra na pasta integration devido ser uma configuração especifica do FrameWork.

**Versâo do Cypress utilizada:**

~~8.3.1~~

**Versâo do node.js utilizada:**

~~17.1~~

**Comandos úteis:**
- brew install allure (ou similar para seu sistema operacional)
- npm install -D @shelex/cypress-allure-plugin
- cypress run --config video=false --env allure=true
- allure generate allure-results
- rm -r allure-results/ allure-report || true
- allure open allure-report
- npx npm-run-all allure:clear cy:run allure:report

***Relatórios:***

~~Allure Reports~~

~~Allure Reports Plugin~~

~~npm-run-all~~
