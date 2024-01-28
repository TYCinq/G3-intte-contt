// // npm install mocha
// // npm install assert
// // npm install mock-local-storage


// // pannier site
// function addToCart (productName, price) {
//     var cart = JSON.parse(localStorage.getItem('cart')) || [];
//     var newItem = { productName: productName, price: price};
//     cart.push(newItem);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     return cart;
// }

// module.exports = addToCart


// //test 

// const assert = require ('assert');
// const mock = require ('mock-local-storage');
// const addToCart = require ('./cart');

// before(() => {
//     global.localStorage = mock.localStorage();
// });

// describe('addItemToCart', function() {
//     it('ajouter un objet au pannier', function() {
//         addToCart('Product 1', 10.99);
//         const cart = JSON.parse(localStorage.getItem('cart'));

//         assert.strictEqual(cart.length, 1);
//         assert.strictEqual(cart[0].productName, 'Product 1');
//         assert.strictEqual(cart[0].price, 10.99);
//     });

// });



//npm install mocha --save-dev
const assert = require('assert');
//const { addToCart, clearCart, removeFromCart } = require('./cart'); // Replace with the actual path to your cart file

describe('Shopping Cart', function () {
  beforeEach(function () {
    // Set up a clean localStorage before each test
   // localStorage.removeItem('cart');
  });

  it('should add a product to the cart', function () {
    // Arrange
    const productName = 'Test Product';
    const price = '9.99';
    const image = 'test-image.png';

    // Act
    addToCart(productName, price, image);

    // Assert
   // const updatedCart = JSON.parse(localStorage.getItem('cart'));
    assert.strictEqual(updatedCart.length, 1, 'Cart should have one item');
    assert.strictEqual(updatedCart[0].name, productName, 'Product name should match');
    assert.strictEqual(updatedCart[0].price, price, 'Product price should match');
    assert.strictEqual(updatedCart[0].image, image, 'Product image should match');
  });

  it('should clear the cart', function () {
    // Arrange
    addToCart('Test Product', '9.99', 'test-image.png');

    // Act
    clearCart();

    // Assert
   // const updatedCart = JSON.parse(localStorage.getItem('cart'));
    assert.strictEqual(updatedCart.length, 0, 'Cart should be empty');
  });

  it('should remove a product from the cart', function () {
    // Arrange
    const productName = 'Test Product';
    addToCart(productName, '9.99', 'test-image.png');

    // Act
    removeFromCart(productName);

    // Assert
    //const updatedCart = JSON.parse(localStorage.getItem('cart'));
    assert.strictEqual(updatedCart.length, 0, 'Cart should be empty');
  });
});
 

// toutes les mention de local storage on été commenté
//npx mocha cart.test.js