document.addEventListener("click", function (event) {
  const elementToWatch = document.getElementById("reviewBox")
  if (!elementToWatch) {
    return
  }

  if (!elementToWatch.contains(event.target)) {
    closeModal()
  }
})
