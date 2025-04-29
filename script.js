document.addEventListener("DOMContentLoaded", () => {
  const logoCsv = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRQGarysli_mx8FbYjwa3eYhHdGxy0jb8q9LaMNQOgUqlIy9p1zJxBaIUgoNnN60F0YBom5UQy69eZQ/pub?output=csv";
  const container = document.getElementById("slideshowImages");

  fetch(logoCsv)
    .then(response => response.text())
    .then(text => {
      const rows = text.trim().split("\n").slice(1);
      const logos = rows.map(row => {
        const [img, href, alt] = row.split(",");
        return {
          img: img.trim(),
          href: href.trim(),
          alt: alt ? alt.trim() : ""
        };
      });

      for (let i = 0; i < 4; i++) {
        logos.forEach(logo => {
          const link = document.createElement("a");
          link.href = logo.href;
          link.target = "_blank";
          link.rel = "noopener";

          const image = document.createElement("img");
          image.src = logo.img;
          image.alt = logo.alt;

          link.appendChild(image);
          container.appendChild(link);
        });
      }
    });
});