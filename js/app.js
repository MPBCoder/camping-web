const nav = document.querySelector(".mobile-nav");
const navBtn = document.querySelector(".header-top__show-more");

navBtn.addEventListener("click", function () {
	navBtn.classList.toggle("header-top__show-more--open");
	nav.classList.toggle("mobile-nav--open");
});

// =============================

// const like = document.querySelector(".place__like-wrapper");
// const likeBtn = document.querySelector(".place__like");

// like.addEventListener("click", function () {
// 	likeBtn.classList.toggle("place__like--fill");
// });
