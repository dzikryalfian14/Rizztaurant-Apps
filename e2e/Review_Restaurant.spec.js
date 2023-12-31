/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post resto review', async ({ I }) => {
  const reviewText = 'bla bla bla';

  I.seeElement('.card-content-title');
  I.click(locate('.card-content-title a').first());

  I.seeElement('.form-review form');
  I.fillField('inputName', 'dzikryy');
  I.fillField('inputReview', reviewText);
  I.wait(4);
  I.click('#submit-review');

  I.seeElement('.body-review');
  const lastReview = locate('.body-review').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});
