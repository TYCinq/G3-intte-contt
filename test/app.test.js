const mocha = require('mocha');
const expect = require('assert').strict;  // Utilisation de l'assertion native de Node.js

// Fonction addToCart
const addToCart = {
  calculerLePrixTotal: function (panier) {
    // Logique pour calculer le prix total
    panier.prixTotal = panier.prix * panier.quantité;
  }
};

// Suite de tests
describe('addToCart', () => {
  it('devrait vérifier le contenu de la variable', () => {
    // Arrange
    const panier = {
      nomProduit: 'clavier XXX',
      prix: 75.00,
      quantité: 1,
    };

    // Act
    addToCart.calculerLePrixTotal(panier);

    // Assert
    if (panier.prixTotal === 75.00) {
      console.log('Test réussi !');
    } else {
      throw new Error('Le test a échoué : le prix total n\'est pas égal à 75.00');
    }
  });
});
