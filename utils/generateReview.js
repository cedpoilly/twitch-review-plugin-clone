const { generateStarsHTML } = require("./stars")

function generateReview({ name, rating, text, photo_url }) {
  console.log(name)
  return `
  <div class="review">

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
