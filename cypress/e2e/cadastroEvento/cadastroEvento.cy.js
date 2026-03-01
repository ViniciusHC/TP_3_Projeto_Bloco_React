/// <reference types = "cypress"/>


//Cenario 1 - veririficar se o item foi adicionado à lista
//Cenario 2 - verificar campos vazios

describe("Teste de cadastro de novos livros", () => {
    
    it("Verificar se o item foi adicionado à lista", () => {
        cy.visit('http://localhost:5173/cadastroEventos');

        cy.get('input#cadastroName').type('nomeTeste');
        cy.get('input#cadastroLocal').type('localTeste');
        cy.get('input#cadastroData').type('2026-04-03');
        cy.get('textarea#cadastroDescricao').type('descricaoTeste');

        cy.get('button#botaoTesteCadastro').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Evento salvo com sucesso'); 
        });        
})   


 it("Verificar se o algum campo está vazio", () => {
        cy.visit('http://localhost:5173/cadastroEventos');

        cy.get('input#cadastroName').type('nomeTeste');
        cy.get('input#cadastroData').type('2026-04-03');
        cy.get('textarea#cadastroDescricao').type('descricaoTeste');

        cy.get('button#botaoTesteCadastro').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Preencha todos os campos obrigatórios!'); 
        });        
}) 

})