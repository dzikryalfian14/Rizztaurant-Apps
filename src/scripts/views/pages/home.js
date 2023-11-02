import RestaurantSource from '../../data/restourant-source';
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
          <div>
            <div id="loading"></div>
            <main id="main-content" class="main-content">
                <h2 tabindex="0" class="restaurant_label"><span class="rizz">Find Out Your Rizzto</span></h2>
                <section id="restaurant-list">${createSkeletonRestaurantTemplate(20)}</section>
            </main>
          </div>
      `;
  },

  async afterRender() {
    const getRestaurant = await RestaurantSource.getRestaurants();
    const listOfRestourant = document.getElementById('restaurant-list');
    listOfRestourant.innerHTML = '';
    getRestaurant.forEach((restaurant) => {
      listOfRestourant.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
