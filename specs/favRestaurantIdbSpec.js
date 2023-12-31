/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favRestaurantContracts';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
