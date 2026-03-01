/// <reference types = "cypress"/>

describe("Canarary Test", () => {
    it ("Deve retornar True", () => {const verdadeiro = true;
    const ehVerdade = verdadeiro == true;
    expect(ehVerdade).to.equal(true);
});  
})