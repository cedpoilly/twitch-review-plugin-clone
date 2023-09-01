const { generateStarsHTML } = require("./stars")

function generateReview({ id, name, rating, text, photo_url }) {
  return `
  <div class="review" hx-get="/zoom/${id}" hx-taget="zoomHandle" hx-swap="beforebegin">

  ${
    !photo_url
      ? ""
      : `<div
        class="review__image-container"
        style="background-image: url( ${photo_url} )"
      ></div>`
  }

    <h3 class="review__name">
      ${name}
    </h3>

    <h4 class="review__rating">
    ${generateStarsHTML(rating)}
    </h4>

    <p class="review__text">
      ${text}
    </p>
  </div>
  `
}

module.exports = { generateReview }
