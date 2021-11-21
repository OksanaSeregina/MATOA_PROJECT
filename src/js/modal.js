const showModalStory = () => {
  const modalEl = document.querySelector("#modal-history");
  modalEl.classList.add("overlay--show");

  modalEl.addEventListener("click", function (e) {
    if (e.target.closest("#close-modal")) {
      modalEl.classList.remove("overlay--show");
    }
  });

  /* localStorage.setItem(
    "titlePost",
    document.querySelector("#editor").textContent
  );

  localStorage.setItem(
    "descrPost",
    document.querySelector("#editor1").textContent
  ); */

  /* document.querySelector('[name="title-story"]').value =
    localStorage.getItem("titlePost");

  document.querySelector('[name="descr-story"]').value = localStorage
    .getItem("descrPost")
    .substr(0, 50); */
};

/* const setPostLocalStorage = () => {
  let currentTitle = document.querySelector("#editor").innerHTML;
  let currentDescr = document.querySelector("#editor1").innerHTML;

  let allPosts = JSON.parse(localStorage.getItem("allStories"));

  let allStory = {
    title: currentTitle,
    descr: currentDescr,
  };

  allPosts.push(allStory);

  localStorage.setItem("allStories", JSON.stringify(allPosts));
}; */

document.querySelector(".cart").addEventListener("click", showModalStory);
/* document
  .querySelector(".publish-now")
  .addEventListener("click", setPostLocalStorage); */
