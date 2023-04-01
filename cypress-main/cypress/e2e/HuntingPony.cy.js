
describe('Оформление заказа', function () {
    it('Оформление заказа ', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click();
         cy.get('[data-product-id="345198870"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.get('#splide01-slide01 > .img-ratio > .img-ratio__inner > picture > .loaded');
         cy.get('.add-cart-counter__btn').click();
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.get('.add-cart-counter__detail').click();
         cy.get('.header__cart > .icon').click();
         cy.get('.cart-controls > .button').click();
         cy.contains('Оформление заказа');

     })
 })
 