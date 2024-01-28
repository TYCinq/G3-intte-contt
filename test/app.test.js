// coede de tetst du pannier 

//le code test si le total des élément du panier est juste
const mocha = require('mocha');
const expect = require('assert').strict; 

const addToCart = {
  calculerLePrixTotal: function (panier) {
    panier.prixTotal = panier.prix * panier.quantité;
  }
};

describe('addToCart', () => {
  it('devrait vérifier le contenu de la variable', () => {
    const panier = {
      nomProduit: 'clavier XXX',
      prix: 75.00,
      quantité: 1,
    };

    addToCart.calculerLePrixTotal(panier);

    if (panier.prixTotal === 75.00) {
      console.log('Test réussi !');
    } else {
      throw new Error('Le test a échoué : le prix total n\'est pas égal à 75.00');
    }
  });
});
