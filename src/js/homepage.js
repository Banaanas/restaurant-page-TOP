import logo from "../images/logo.png";
import burgerMenu from "../images/burger-menu.svg";

const contentPage = document.querySelector("#content");

function homePage() {
  contentPage.innerHTML = "";

  contentPage.insertAdjacentHTML("afterbegin", `
    <header id="header">
    <nav id="responsive-menu-nav">
        <a href="#"><img id="responsive-menu-image" src=${burgerMenu} alt="Burger Menu Image"></a>
    </nav>
    <nav id = nav-bar>
        <ul id = "navigation-container">
            <li class="navigation-list"><a id="home-link" href="#">Home</a></li>
            <li class="navigation-list"><a id="about-us-link" href="#">About Us</a></li>
            <li class="navigation-list"><a id="carte-link" href="#">Carte</a></li>
            <li class="navigation-list"><a id="contact-link" href="#">Contact</a></li>
        </ul>
    </nav>
    </header>
    
    <div id="homepage-wrap">
            <main id="homepage-main">
                <section id="hero-banner">
                    <img id ="homepage-logo" src=${logo} alt="Logo La Table Lyonnaise">
                </section>
            </main>     
    </div>`);
}

export default homePage;
