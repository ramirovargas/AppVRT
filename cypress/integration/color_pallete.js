describe('Color pallete visual regresion test', function() {

    it('changes pallete', function() {
      cy.visit('https://ramirovargas.github.io/VRT-Taller/index.html');
      cy.screenshot();
      cy.get('#actions').contains('Generar nueva paleta').click();
      cy.screenshot();
    });

});
