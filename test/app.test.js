const addToCart = require ('../test_unitaire') 

const expect = require ('mocha').expect;


const assert = require ('assert');
const mock = require ('mock-local-storage');
const addToCart = require ('./cart');

before(() => {
    global.localStorage = mock.localStorage();
});

describe('addItemToCart', function() {
    it('ajouter un objet au pannier', function() {
        addToCart('Product 1', 10.99);
        const cart = JSON.parse(localStorage.getItem('cart'));

        assert.strictEqual(cart.length, 1);
        assert.strictEqual(cart[0].productName, 'Product 1');
        assert.strictEqual(cart[0].price, 10.99);
    });

});