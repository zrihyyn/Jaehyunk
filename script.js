const images = document.querySelectorAll(".image-placeholder img");

images.forEach((image, index) => {
  const placeholder = image.closest(".image-placeholder");

  if (!placeholder) return;

  const prepareImage = () => {
    const width = image.naturalWidth;
    const height = image.naturalHeight;

    if (!width || !height) return;

    /*
      HTML에 잘못된 aspect-ratio가 있더라도
      실제 이미지 비율로 덮어씁니다.
    */
    placeholder.style.aspectRatio = `${width} / ${height}`;

    placeholder.classList.remove(
      "is-landscape",
      "is-portrait",
      "is-square"
    );

    if (width > height) {
      placeholder.classList.add("is-landscape");
    } else if (height > width) {
      placeholder.classList.add("is-portrait");
    } else {
      placeholder.classList.add("is-square");
    }

    /*
      배경색을 잠시 보여준 뒤 이미지 표시
    */
    const delay = 1000 + (index % 6) * 120;

    window.setTimeout(() => {
      image.classList.add("is-loaded");
    }, delay);
  };

  if (image.complete && image.naturalWidth > 0) {
    prepareImage();
  } else {
    image.addEventListener("load", prepareImage, {
      once: true
    });
  }

  image.addEventListener(
    "error",
    () => {
      console.warn(`이미지를 불러오지 못했습니다: ${image.src}`);
    },
    { once: true }
  );
});

const contactToggle = document.querySelector(".contact-toggle");
const contactPanel = document.querySelector(".contact-panel");

if (contactToggle && contactPanel) {
  const setContactOpen = (isOpen) => {
    contactToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    contactPanel.setAttribute(
      "aria-hidden",
      String(!isOpen)
    );

    contactPanel.classList.toggle("is-open", isOpen);
  };

  contactToggle.addEventListener("click", () => {
    const isOpen =
      contactToggle.getAttribute("aria-expanded") === "true";

    setContactOpen(!isOpen);
  });

  /*
    박스 바깥을 클릭하면 닫힙니다.
  */
  document.addEventListener("click", (event) => {
    const clickedInsidePanel =
      contactPanel.contains(event.target);

    const clickedToggle =
      contactToggle.contains(event.target);

    if (!clickedInsidePanel && !clickedToggle) {
      setContactOpen(false);
    }
  });

  /*
    Esc 키로 닫기
  */
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setContactOpen(false);
      contactToggle.focus();
    }
  });
}