/// <reference types="cypress" />

context('Local Storage', () => {
  beforeEach(() => {
    cy.visit('https://www.vr.com.br/')
  })

  it('Acessando a página de VR e realizando uma pesquisa no mapa localizado no site', () => {
    // cy.visit('https://www.vr.com.br/')
    //Clique aceitar os cookies sendo realizado
    cy.get('.lum-first').click()

    // Scroll utilizado para descer a página até o próximo elemento
    cy.scrollTo(983, 350)
 
  // Elemento expecionado e clicado na label Pra você
  //Localizando label com campo Pra você
    cy.get(':nth-child(3) > .vr-quick-navigation__link > .vr-quick-navigation__label').click()
  

  // Clique realizado no botão onde usar o cartão
  //Localizando botâo onde usar o cartão VR?
    cy.get('.vr-hero__actions > .vr-button--negative').click()


  //Incrementei realizando a pesquisa de uma localidade do campo pesquisa
  //Após clicar no botâo onde usar o cartão VR? realizo a pesquisa se algum lugar para pesquisa
    cy.get('#endereco').type('sâo paulo').first().focus().should('be.visible')
    cy.get('.icon-search').click()

  //Utilizei um espera para verificar o carregamento do campo de seleÇâo
    cy.wait(2)
    cy.get('[data-place-id="ChIJ0WGkg4FEzpQRrlsz_whLqZs"]').should('be.visible')
    .click()
  })
})
