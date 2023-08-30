const express = require("express")
const ejs = require("ejs")
const path = require("path")
const fs = require("fs")

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use("/images", express.static(path.join(__dirname, "images")))

const jsonData = JSON.parse(fs.readFileSync("./data/reviews.json"))

app.get("/", (_, res) => {
  res.render("index", { reviews: jsonData.slice(0, 4) })
})

app.get("/:page", (req, res) => {
  console.log(req.params)
  const pageHTML = jsonData
    .slice(5, 9)
    .map(
      (review) => `
  <div class="review">


  ${
    !review.photoLink
      ? ""
      : `<div
        class="review__image-container"
        style="background-image: url( ${review.photoLink} )"
      ></div>`
  }

    <h3 class="review__name">
      ${review.name}
    </h3>

    <h4 class="review__rating">
    ${review.rating}
    </h4>

    <p class="review__text">
      ${review.reviewText}
    </p>
  </div>
  `
    )
    .join("")
    .trim()

  res.send(pageHTML)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
