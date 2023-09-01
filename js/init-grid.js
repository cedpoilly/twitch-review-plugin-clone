reloadItems()

document.body.addEventListener("htmx:afterSwap", function (event) {
  reloadItems()
})

function reloadItems() {
  const elem = document.querySelector(".reviews-grid")

  new Masonry(elem, {
    itemSelector: ".review",
    columnWidth: 250,
  })
}
