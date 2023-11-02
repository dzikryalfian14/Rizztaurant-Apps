import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div>
        <h2 tabindex="0" class="restaurant_label"><span class="rizz">Favorite</span></h2>
        <h2 class="restaurant-not-found"></h2>
        <section id="restaurant-list"></section>
      </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.getElementById('restaurant-list');
    const empty = document.querySelector('.restaurant-not-found');
    if (restaurants.length === 0) {
      empty.innerHTML = `
        <h2>Tidak ada favorite restaurant yang ditampilkan</h2>
        `;
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  },
};

export default Favorite;
