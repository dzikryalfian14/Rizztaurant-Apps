import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <article tabindex="0" class="card">
        <div class="card-img-container">
            <span class="card-place">${restaurant.city}</span>
            <picture>
              <img class="card-image lazyload" width="300" height="200" loading="lazy" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}"/>
            </picture>
            <span class="card-rating">
                <i title="ratings"></i>
                &starf; <span>${restaurant.rating}</span>
            </span>
        </div>

        <div class="card-content">
            <p class="card-content-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></p>
            <p class="card-content-description">${restaurant.description}</p>
        </div>
    </article>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
      <article tabindex="0" class="card">
          <div class="card-img-container">
              <img class="card-image lazyload" loading="lazy" alt="skeleton" src="./public/images/placeholder.jpg" width="100%" height="250px"/>
          </div>

          <div class="card-content">
              <p class="skeleton">Lorem ipsum dolor sit.</p>
              <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
          </div>
      </article>
    `;
  }
  return skeleton;
};

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail">
    <div class="detail-top">
      <div class="container-image">
        <picture>
          <source class="detail-img lazyload" srcset="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" type="image/webp" media="all and (max-width: 300px)" />        
          <source class="detail-img lazyload" srcset="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" type="image/jpeg" media="all and (max-width: 300px)" />
          <img class="detail-img lazyload" width="300" height="200" data-src="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}" alt="${restaurant.name}" loading="lazy"/>
        </picture>
      </div>

      <div class="detail-info">
        <ul>
          <li class="resto-name">
            <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
            <p class="detail-resto-spec">${restaurant.name}</p>
          </li>
          <li class="resto-address">
            <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
            <p class="detail-resto-spec">${restaurant.address}, ${restaurant.city}</p>
          </li>
          <li class="resto-rating">
            <i title="ratings">⭐</i>
            <p class="detail-resto-spec">${restaurant.rating}</p>
          </li>
          <li>
            <i class="desc-resto"> Rizzto Desc: </i>
            <p class="detail-desc"> ${restaurant.description}</p>
          </li>
          <li class="resto-category">
            ${restaurant.categories
    .map((category) => `
                <span class="category">${category.name}</span>
              `)
    .join('')}
          </li>
        </ul>
      </div>
    </div>
    <div class="detail-mid">
      <h3 tabindex="0" class = "title-menu" >Menu</h3>
      <div tabindex="0" class="detail-menu">
        <div class="detail-food">
          <h4>Food</h4>
          <ul>
            ${restaurant.menus.foods
    .map((food) => `
                <li><p>${food.name}</p></li>
              `)
    .join('')}
          </ul>
        </div>

        <div class="detail-drink">
          <h4>Drink</h4>
          <ul>
            ${restaurant.menus.drinks
    .map((drink) => `
                <li><p>${drink.name}</p></li>
              `)
    .join('')}
          </ul>
        </div>
      </div> 
    </div>
    <div class="detail-bottom">
      <h3 tabindex="0" class="review-title">Reviews</h3>
      <div tabindex="0" class="detail-review">
      ${restaurant.customerReviews.map(
    (review) => `
            <div class="detail-review-item">
              <div class="header-review">
                <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>

                <p class="date-review">${review.date}</p>
              </div>

              <div class="body-review">
                ${review.review}
              </div>
            </div>
          `,
  )
    .join('')}
      </div>
    </div>
  </div>
  `;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate,
};
