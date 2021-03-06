// ---------------------------------------------------
// Creating a portfolio tabbed component
// ----------------------------------------------------

// When the same class is used multiple times, we need to use querySelectorAll. Use of querySelector makes sense when a class is used only once.

// While tackling with buttons, i am targetting the parent class and adding event listener to it. With the help of target, i am exactly able to identify which button has been clicked.

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  // To find the number in data attribute, we need to use dataset method.
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  // To find out the image with same btn number.
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  // First of all, i am removing all the images & then i will display only those with same matching number.
  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  // Displaying matching number images.
  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

// Swiper JS code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// scroll to top button

const heroSection = document.querySelector(".section-hero");

const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon> `;

footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);
