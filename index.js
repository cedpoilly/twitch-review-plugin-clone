const path = require("path")
const fs = require("fs")

const express = require("express")
const ejs = require("ejs")

const { generateReview } = require("./utils/generateReview.js")
const { generateZoomModal } = require("./utils/generateZoomModal.js")
const { getPageFromArray } = require("./utils/getPageFromArray.js")

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use("/images", express.static(path.join(__dirname, "images")))

const jsonData = JSON.parse(fs.readFileSync("./data/reviews.json"))

app.get("/", (_, res) => {
  res.render("index", { reviews: jsonData.slice(0, 4), generateReview })
})

let page = 1

app.get("/next-page", (_, res) => {
  const pageHTML = getPageFromArray(jsonData, page, 5)
    .map((review) => generateReview(review))
    .join("")
    .trim()

  page += 1

  res.send(pageHTML)
})

app.get("/zoom/:id", (req, res) => {
  console.log(req.params.id)
  const review = jsonData.find((review) => review.id == req.params.id)
  const zoomHTML = generateZoomModal(review)

  res.send(zoomHTML)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
