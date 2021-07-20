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

function onChangeVideo(videoUrl) {
  let video = document.getElementById("selected_video");

  video.setAttribute("src", `https://www.youtube.com/embed/${videoUrl}`);
}
