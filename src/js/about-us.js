import logo from "../images/logo.png";
import burgerMenu from "../images/burger-menu.svg";

const contentPage = document.querySelector("#content");

function aboutUsPage() {
  contentPage.innerHTML = "";

  contentPage.insertAdjacentHTML(
    "afterbegin",
    `
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
    
    <div id="about-us-wrap">
        <main id="about-us-main">
            <section id="about-us">
                <p id="about-us-text">Fondé en 1982, notre établissement est le fruit d’une rencontre entre des mondes et des individus. Une rencontre entre des talents et des gastronomies.
                    <br><br>Située au cœur de la capitale, <em>La Table Lyonnaise</em> vous propose une cuisine à la fois délicate et simple, une carte fraîche et légère, composée essentiellement de produits du terroir.  
                    Aux commandes, le chef étoilé <strong>Lulu Potimarron</strong> vous ravira les papilles. </br></br>Pour l’assister, une équipe tout entière dévouée à votre confort et votre satisfaction, qui vous accueillera avec savoir-faire et sourire.</p>
                       
                <img id="about-us-logo" src=${logo} alt="">
            </section>
        </main>    
    </div>`,
  );
}

export default aboutUsPage;
