/* eslint-disable no-undef */
const { I } = inject();
const assert = require('assert');

Feature('Liking Restaurant');

Before(() => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', () => {
  I.seeElement('#restaurant-list');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-not-found');
});

Scenario('liking one restaurant', async () => {
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-not-found');

  I.amOnPage('/');
  I.seeElement('.card-content-title a');
  const firstCardRestaurant = locate('.card-content-title a').first();
  const firstCardRestaurantTitle = await I.grabTextFrom(firstCardRestaurant);
  I.click(firstCardRestaurant);

  I.waitForElement("#likeButton");
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-content-title a');
  const likedRestaurantTitle = await I.grabTextFrom('.card-content-title a');

  assert.strictEqual(firstCardRestaurantTitle, likedRestaurantTitle);
});
