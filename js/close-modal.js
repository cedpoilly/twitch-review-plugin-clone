function closeModal() {
  const zoomBox = document.querySelector("#reviewBox")
  zoomBox.classList.add("hide-modal")

  const modal = document.querySelector("#reviewBox-wrapper")
  setTimeout(() => modal.remove(), 500)
}
