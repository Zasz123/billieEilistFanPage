window.addEventListener("scroll", () => {
  let y = window.pageYOffset;

  if (y >= 700) {
    document
      .getElementById("header__navigation")
      .classList.add("header__navigation--active");
  }

  if (y < 700) {
    document
      .getElementById("header__navigation")
      .classList.remove("header__navigation--active");
  }
});
