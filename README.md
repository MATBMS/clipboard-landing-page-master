# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Responsive design](#responsive-design)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Preview Screenshot](./images/preview.jpg)

### Links

- Solution URL: [GitHub Repo](https://github.com/MATBMS/clipboard-landing-page-master)
- Live Site URL: [Live Site](https://matbms-clipboard-landing-page-master.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned how to display a success pop-up when a user clicks the download button, providing immediate feedback and improving the user experience.

```js
function showSuccessPopup(btnContent) {
  const message = `${btnContent} is successful!`;
  const popup = document.getElementById("success-popup");
  popup.querySelector(".success-popup-message").textContent = message;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

document.querySelectorAll(".btn").forEach((btn) => {
  const btnContent = btn.textContent;
  btn.addEventListener("click", function () {
    showSuccessPopup(btnContent);
  });
});
```

### Responsive design

The site is responsive, with layouts for mobile and tablet devices at the following breakpoints:

```css
/* TABLET */

@media (max-width: 768px) {
}

/* MOBILE */

@media (max-width: 375px) {
}
```
