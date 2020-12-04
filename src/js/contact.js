import burgerMenu from "../images/burger-menu.svg";
import phoneIcon from "../images/SocialMedias/phone.svg";
import emailIcon from "../images/SocialMedias/email.svg";
import whatsappIcon from "../images/SocialMedias/whatsapp.svg";
import facebookIcon from "../images/SocialMedias/facebook.svg";
import instagramIcon from "../images/SocialMedias/instagram.svg";

const contentPage = document.querySelector("#content");

function contactPage() {
  contentPage.innerHTML = "";

  contentPage.insertAdjacentHTML(
    "afterbegin",
    `
    <header id="header">
            <nav id="responsive-menu-nav">
                <a href="#"><img id="responsive-menu-image" src="${burgerMenu}" alt="Burger Menu Image"></a>
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
            
            <div id="contact-wrap">
                
                <main id="contact-main">
                    <h1 id="title-page-contact">Contact</h1>

                    <form id = contact-form>
                        <div>
                            <label class="label-contact-form" for="name">Nom :</label>
                            <input type="text" id="name" name="user_name">
                        </div>
                        <div>
                            <label class="label-contact-form" for="mail">Courriel :</label>
                            <input type="email" id="courriel" name="user_mail">
                        </div>
                        <div>
                            <label class="label-contact-form" for="msg">Message :</label>
                            <textarea id="msg" name="user_message"></textarea>
                        </div>

                        <div id="button-container">
                            <div class="button">
                                <button id="form-button" type="submit">Envoyer</button>
                            </div>
                        </div>
                    </form>

                    <section id = social-medias-contact>
                        
                        <a href="#"><img src=${phoneIcon} alt="Phone Icon" class="social-medias-images"></a>
                        
                        <a href="#"><img src=${emailIcon} alt="eMail Icon" class="social-medias-images"></a>
                        
                        <a href="#"><img src=${whatsappIcon} alt="Whatsapp Icon" class="social-medias-images"></a>
                        
                        <a href="#"><img src=${facebookIcon} alt="Facebook Icon" class="social-medias-images"></a>

                        <a href="#"><img src=${instagramIcon} alt="Instagram Icon" class="social-medias-images"></a>
                    </section>

                </main>    

            </div>
`,
  );


}

export default contactPage;
