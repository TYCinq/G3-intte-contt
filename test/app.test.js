const mocha = require ('mocha');
const addToCart = function addToCart() {
    const productName = 'Test Product';
    const price = '9.99';
    const image = 'test-image.png';
}


describe.skip('addToCart'), ()=>{
    it('devrait verifier le contenu de la variable', () => {

        const pannier = {
           nomProduit : 'clavier XXX',
           prix: 75.00,
           quantité: 1,
        };

    addToCart.calculerLePrixTotal (pannier);

    expect(pannier.prixTotal).to.equal(10);
    })
}   