import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restourant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-init';
import PostReview from '../../utils/post-review';
import loader from '../templates/loadbar';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <div class="main">
        <h2 tabindex="0" class="restaurant_label">Detail Restaurant</h2>
        <div id="loading"></div>
          <section id="restourant-detail"></section>
          <div class="like" id="likeButtonContainer"></div>
          <div class="form-review">
            <form>
              <div class="containerReview">
                <label for="inputName" class="form-label">Name</label>
                <input name="inputName" type="text" class="form-control" id="inputName">
              </div>
              <div class="containerReview">
                <label for="inputReview" class="form-label">Review</label>
                <input name="inputReview" type="text" class="form-control" id="inputReview">
              </div>
              <button id="submit-review" type="submit" class="btn">Submit</button>
            </form>
          </div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const listOfRestourant = document.getElementById('restourant-detail');
    const loading = document.querySelector('#loading');

    loading.innerHTML = loader();
    listOfRestourant.style.display = 'none';
    setTimeout(() => {
      loading.style.display = 'none';
      listOfRestourant.style.display = 'block';
      listOfRestourant.innerHTML = createRestaurantDetailTemplate(restaurant);
    }, 1000);

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });

    const submitReview = document.getElementById('submit-review');
    submitReview.addEventListener('click', (event) => {
      event.preventDefault();
      PostReview();
    });
  },

};

export default Detail;
