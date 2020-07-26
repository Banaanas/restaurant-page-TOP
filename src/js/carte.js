import burgerMenu from "../images/burger-menu.svg";
import saladImage from "../images/Carte/plat-1.jpeg";
import poissonImage from "../images/Carte/plat-2.jpeg";
import viandeImage from "../images/Carte/plat-3.jpeg";
import accompagnementsImage from "../images/Carte/plat-4.jpeg";
import dessertsImage from "../images/Carte/plat-5.jpeg";
import glacesImage from "../images/Carte/plat-6.jpeg";

const contentPage = document.querySelector("#content");

function cartePage() {
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
            
    <div id="carte-wrap">
                <main id="carte-main">
                    <section id="carte-container">
                        
                        <div class="plat-container">
                            <img src=${saladImage} alt="" class="images-carte" id="plat-1">
                            <p class="text-carte">Salades</p>
                        </div>
                        <div class="plat-container">
                            <img src=${poissonImage} alt="" class="images-carte" id="plat-2">
                            <p class="text-carte">Poisson</p>
                        </div>
                        <div class="plat-container">
                            <img src=${viandeImage} alt="" class="images-carte" id="plat-3">
                            <p class="text-carte">Viande</p>
                        </div>
                        <div class="plat-container">
                            <img src=${accompagnementsImage} alt="" class="images-carte" id="plat-4">
                            <p class="text-carte">Accompagnements</p>
                        </div>
                        <div class="plat-container">
                            <img src=${dessertsImage} alt="" class="images-carte" id="plat-5">
                            <p class="text-carte">Desserts</p>
                        </div>
                        <div class="plat-container">
                            <img src=${glacesImage} alt="" class="images-carte" id="plat-6">
                            <p class="text-carte">Glaces</p>
                        </div>
                  
                    </section>
                   
                </main>    
                
            </div>
`,
  );
}

export default cartePage;
