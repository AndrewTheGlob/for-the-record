import { urlFor } from "./sanity";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return "";
      }

      const imageUrl = urlFor(value)
        .width(1400)
        .url();

      const alt = escapeHtml(
        value.alt || ""
      );

      const caption = escapeHtml(
        value.caption || ""
      );

      return `
        <figure class="body-image">
          <img
            src="${imageUrl}"
            alt="${alt}"
            loading="lazy"
          />

          ${
            caption
              ? `<figcaption>${caption}</figcaption>`
              : ""
          }
        </figure>
      `;
    }
  }
};