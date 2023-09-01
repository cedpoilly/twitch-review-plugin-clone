const { generateStarsHTML } = require("./stars")

function generateZoomModal({ name, rating, text, photo_url }) {
  return `<div id="reviewBox-wrapper" class="reviewBox__wrapper">
  <div id="reviewBox" class="reviewBox">
    <button class="close-button" onclick="closeModal()">X</button>

    <div class="reviewBox__image">
      <img src="${photo_url}" alt="Reviewer's image">
    </div>

    <div class="reviewBox__content">
      <div class="content__header">
        <h3 class="name">${name}</h3>

        <div class="content_ratings">
          ${generateStarsHTML(rating)}
        </div>
      </div>

      <div class="content__main">
        ${text}
      </div>

      <div class="content__footer">
        <div class="go-to-product-card">
          <div class="product-img">
            <img src="https://cdn.shopify.com/s/files/1/0586/6520/5927/products/12monthTikTok_x100.png?v=1686258519"
              onerror="this.parentNode.removeChild(this);" alt="Hostage Tape Year" />
          </div>

          <div class="product-details">
            <div class="product-title">Hostage Tape Year</div>

            <a href="/p/ISeYc5_Rl?ref=inline" class="link" title="View product at store" target="_blank"
              rel="nofollow noopener noreferrer" class="icon-button">
              <div class="button-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.66667 5.33335V4.00002C4.66667 3.11597 5.01786 2.26812 5.64298 1.643C6.2681 1.01788 7.11595 0.666687 8 0.666687C8.88406 0.666687 9.7319 1.01788 10.357 1.643C10.9821 2.26812 11.3333 3.11597 11.3333 4.00002V5.33335H13.3333C13.5101 5.33335 13.6797 5.40359 13.8047 5.52862C13.9298 5.65364 14 5.82321 14 6.00002V14C14 14.1768 13.9298 14.3464 13.8047 14.4714C13.6797 14.5964 13.5101 14.6667 13.3333 14.6667H2.66667C2.48986 14.6667 2.32029 14.5964 2.19526 14.4714C2.07024 14.3464 2 14.1768 2 14V6.00002C2 5.82321 2.07024 5.65364 2.19526 5.52862C2.32029 5.40359 2.48986 5.33335 2.66667 5.33335H4.66667ZM4.66667 6.66669H3.33333V13.3334H12.6667V6.66669H11.3333V8.00002H10V6.66669H6V8.00002H4.66667V6.66669ZM6 5.33335H10V4.00002C10 3.46959 9.78929 2.96088 9.41421 2.58581C9.03914 2.21073 8.53043 2.00002 8 2.00002C7.46957 2.00002 6.96086 2.21073 6.58579 2.58581C6.21071 2.96088 6 3.46959 6 4.00002V5.33335Z"
                    fill="currentColor">
                  </path>
                </svg>
              </div>

              <span class="button-text">View product</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `
}

module.exports = { generateZoomModal }
