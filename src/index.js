// Stylesheets
import "./styles/index.scss";
import "./styles/index.css";
import "./styles/normalize.css";

import homePage from "./js/homepage";
import aboutUsPage from "./js/about-us";
import cartePage from "./js/carte";
import contactPage from "./js/contact";

homePage();

const homeLink = document.querySelector("#home-link");
homeLink.style.color = "#EE4266";

// Event Delegation because navbar is dynamically created
document.body.addEventListener("click", (event) => {
  if (event.target.id === "home-link") {
    homePage();
    const homeLink2 = document.querySelector("#home-link");
    homeLink2.style.color = "#EE4266";
  } else if (event.target.id === "about-us-link") {
    aboutUsPage();
    const aboutUsLink = document.querySelector("#about-us-link");
    aboutUsLink.style.color = "#EE4266";
  } else if (event.target.id === "carte-link") {
    cartePage();
    const carteLink = document.querySelector("#carte-link");
    carteLink.style.color = "#EE4266";
  } else if (event.target.id === "contact-link") {
    const contactLink = document.querySelector("#contact-link");
    contactPage();
    contactLink.style.color = "#EE4266";
  }
});

// Responsive Menu / Burger Menu
document.body.addEventListener("click", (event) => {
  if (event.target.id === "responsive-menu-image") {
    const navigationContainer = document.querySelector("#navigation-container");

    if (navigationContainer.style.display === "" || navigationContainer.style.display === "none") {
      navigationContainer.style.display = "flex";
    } else {
      navigationContainer.style.display = "none";
    }
  }
});
