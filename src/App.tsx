import "./App.css";
import alice from "./assets/images/alice.webp";
import kewpie from "./assets/images/kewpie.webp";
import theBeatles from "./assets/images/the-beatles.webp";
import kemonitoKuromi from "./assets/images/kemonito-kuromi.webp";
import axolotl from "./assets/images/axolotl.webp";
import alienCat from "./assets/images/alien-cat.webp";
import plushieBrown from "./assets/images/plushie-brown.webp";
import plushieGreen from "./assets/images/plushie-green.webp";
import keychainInside from "./assets/images/keychain-inside.webp";
import keychainFront from "./assets/images/keychain-front.webp";
import keychainBack from "./assets/images/keychain-back.webp";
import artChuy from "./assets/images/art-chuy.webp";
import artMalice from "./assets/images/art-malice.webp";
import artManchild from "./assets/images/art-manchild.webp";
import sbCover from "./assets/images/SB/sb-cover-image.webp";
import sbMerch1 from "./assets/images/SB/sb-merch-1.webp";
import sbMerch2 from "./assets/images/SB/sb-merch-2.webp";
import sbMerch3 from "./assets/images/SB/sb-merch-3.webp";
import sbMerch4 from "./assets/images/SB/sb-merch-4.webp";
import sbEvent1 from "./assets/images/SB/sb-event-1.webp";
import sbEvent2 from "./assets/images/SB/sb-event-2.webp";
import sbEvent3 from "./assets/images/SB/sb-event-3.webp";
import sbEvent4 from "./assets/images/SB/sb-event-4.webp";
import klinikaTanukiLogo from "./assets/images/klinika-tanuki-contorno.webp";
import { Instagram } from "./assets/icons/Instagram";
import { Facebook } from "./assets/icons/Facebook";
import { Youtube } from "./assets/icons/Youtube";
import { Bandcamp } from "./assets/icons/Bandcamp";

import { Marker } from "./assets/icons/Marker";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full px-4">
        <div className="hero-content">
          <a
            href="https://www.instagram.com/klinika_tanuki/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-instagram-link"
          >
            <Instagram />
          </a>
          <div className="wrapper">
            <div className="flex flex-col justify-end flex-1">
              <h1 className="hero-title">Klinika Tanuki</h1>
            </div>
          </div>
        </div>
      </main>
      <main className="flex flex-col items-center gap-12 wrapper">
        <article className="flex flex-col w-full gap-4 p-4 hero">
          <div className="upcoming-events-container">
            <div className="event-title-container">
              <Marker />
              <h2>Próximos eventos</h2>
            </div>
            <div className="event-list">
              <div className="event-item">
                <h3>Paralelicuaro</h3>
                <h4>(por confirmar)</h4>
              </div>
              <div className="event-item">
                <h3>StickerLand</h3>
                <h4>(por confirmar)</h4>
              </div>
            </div>
          </div>
          <div className="categories-container">
            <div className="category-chip bg-[var(--radioactive)] ">bazar</div>
            <div className="category-chip bg-[var(--radioactive)] ">arte</div>
            <div className="category-chip bg-[var(--radioactive)] ">
              stcikers
            </div>
            <div className="category-chip bg-[var(--radioactive)] ">
              impresión
            </div>
            <div className="category-chip bg-[var(--radioactive)] ">música</div>
            <div className="category-chip bg-[var(--radioactive)] ">
              artesanías
            </div>
            <div className="category-chip bg-[var(--no-white)] ">
              sacrificio barbarico
            </div>
          </div>
          <div className="px-4 lg:max-w-lg">
            <p>
              Colectivo de artistas y creadores independientes de Ensenada, Baja
              California.
            </p>
          </div>
        </article>
        <div className="max-w-6xl px-4">
          <section className="content-container">
            <article className="white-card fade-in">
              <h2 className="font-title">Bazar Shop</h2>
              <div className="image-container">
                <img className="first-image" src={kewpie} alt="" />
                <img className="second-image" src={alice} alt="" />
              </div>
              <div className="chip-container">
                <div className="chip">ropa</div>
                <div className="chip">coleccionables</div>
                <div className="chip">materiales</div>
              </div>
              <p className="description">
                Le buscamos un nuevo hogar a todos esos objetos olvidados en el
                tiempo{" "}
              </p>
            </article>
            <article className="outline-card fade-in">
              <h2 className="font-title">stickers</h2>
              <div className="sticker-container">
                <img src={theBeatles} alt="" />
                <img src={kemonitoKuromi} alt="" />
                <img src={alienCat} alt="" />
                <img src={axolotl} alt="" />
              </div>
              <p className="description text-[var(--no-white)]">
                Diseños propios
              </p>
              <div className="chip-container">
                <div className="chip">@CORIANDER_ESCAMILLA</div>
                <div className="chip">@PEPPERJAM_ART</div>
                <div className="chip">@aleescamillapv</div>
              </div>
              <button className="content-link">
                <a href="/" rel="noopener noreferrer">
                  Ver galería
                </a>
              </button>
            </article>
            <article className="radioactive-card fade-in">
              <h2 className="font-title">Servicios</h2>
              <div className="service">
                <div className="chip">diseño gráfico</div>
                <p>Negocio, redes sociales, tarjetas de presentación</p>
              </div>
              <div className="service">
                <div className="chip">impresión</div>
                <p>Impresión de stickers, con suaje y laminado</p>
              </div>
              <div className="service">
                <div className="chip">desarrollo web</div>
                <p>Te creamos tu sitio web o menú interactivo</p>
              </div>
              <button className="content-link dark-scheme">
                <a href="/">Contáctanos</a>
              </button>
            </article>
            <article className="white-card fade-in">
              <h2 className="font-title">Peluches</h2>
              <div className="image-container-even">
                <img className="first-image" src={plushieBrown} alt="" />
                <img className="second-image" src={plushieGreen} alt="" />
              </div>
              <p className="description">Peluches/llavero hechos a mano</p>
              <div className="chip">@PEPPERJAM_ART</div>
            </article>
            <article className="outline-card fade-in">
              <h2 className="font-title">llaveros</h2>
              <div className="keychain-container">
                <div className="keychain-card">
                  <img src={keychainFront} alt="" />
                  <p className="text-center description">Front</p>
                </div>
                <div className="keychain-card">
                  <img src={keychainBack} alt="" />
                  <p className="text-center description">Back</p>
                </div>
                <div className="w-4/5 keychain-card">
                  <img src={keychainInside} alt="" />
                  <p className="text-center description">Inside</p>
                </div>
              </div>
              <div className="chip">@CORIANDER_ESCAMILLA</div>
              <p className="text-[var(--no-white)]">
                Llaveros de acrílico con arte y diseño propio
              </p>
              <button className="content-link">
                <a href="/">ver diseños</a>
              </button>
            </article>
            <article className="pink-card fade-in">
              <h2 className="font-title">Arte</h2>
              <div className="art-gallery-container">
                <img className="second-image" src={artMalice} alt="" />
                <img className="first-image" src={artChuy} alt="" />
                <img className="second-image" src={artManchild} alt="" />
              </div>
              <div className="chip-container">
                <div className="chip">@CORIANDER_ESCAMILLA</div>
                <div className="chip">@PEPPERJAM_ART</div>
                <div className="chip">@aleescamillapv</div>
              </div>
              <button className="content-link dark-scheme">
                <a href="/">ver galería</a>
              </button>
            </article>
            <article className="sacrificio-card fade-in">
              <div className="header-image-container">
                <img src={sbCover} alt="" />
              </div>
              <div className="sacrificio-content">
                <p>Powerviolence de Ensenada, B.C.</p>
                <iframe
                  src="https://www.youtube.com/embed/oC-YMeXGDcI"
                  title="Sacrificio Barbárico - EP (Powerviolence)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <div className="sb-container">
                  <h2>Merch</h2>
                  <div className="merch-list">
                    <div className="merch-item">
                      <img src={sbMerch1} alt="Sacrificio Barbárico merch" />
                      <p className="merch-badge">S.B.</p>
                      <p className="merch-description">Camisa XL Diseño 2025</p>
                    </div>
                    <div className="merch-item">
                      <img src={sbMerch3} alt="Sacrificio Barbárico merch" />
                      <p className="merch-badge">S.B.</p>
                      <p className="merch-description">
                        Sin Saber Afinar Cassette 2024
                      </p>
                    </div>
                    <div className="merch-item">
                      <img src={sbMerch2} alt="Sacrificio Barbárico merch" />
                      <p className="merch-badge">S.B.</p>
                      <p className="merch-description">Camisa XL Diseño 2024</p>
                    </div>
                    <div className="merch-item">
                      <img src={sbMerch4} alt="Sacrificio Barbárico merch" />
                      <p className="merch-badge">S.B.</p>
                      <p className="merch-description">Stickers</p>
                    </div>
                  </div>
                </div>
                <button className="content-link dark-scheme">
                  <a
                    href="https://www.facebook.com/SACRIFICIOBARBARICOPV"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consulta existencias
                  </a>
                </button>
                <div className="sb-container">
                  <h2>Eventos</h2>
                  <div className="event-list">
                    <img src={sbEvent3} alt="Sacrificio Barbárico event" />
                    <img src={sbEvent2} alt="Sacrificio Barbárico event" />
                    <img src={sbEvent1} alt="Sacrificio Barbárico event" />
                    <img src={sbEvent4} alt="Sacrificio Barbárico event" />
                  </div>
                </div>
                <div className="sb-container">
                  <h2>Contacto</h2>
                  <div className="social-links">
                    <a
                      href="https://www.instagram.com/sacrificio.barbaricopv/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram />
                    </a>{" "}
                    <a
                      href="https://www.facebook.com/SACRIFICIOBARBARICOPV"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook />
                    </a>{" "}
                    <a
                      href="https://www.youtube.com/@SACRIFICIOBARBARICO"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube />
                    </a>{" "}
                    <a
                      href="https://sacrificiobarbarico.bandcamp.com/album/ep-1-sin-saber-afinar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Bandcamp />
                    </a>
                  </div>
                </div>
                <p className="uppercase">@sacrificio.barbaricopv</p>
              </div>
            </article>
            <article className="pink-card fade-in">
              <h2 className="font-title">Contacto</h2>
              <p className="description">
                Si quieres ver más de nuestros productos, o quieres que te
                ayudemos a crear algo, contáctanos por cualquiera de nuestras
                redes sociales.
              </p>
              <div className="chip-container">
                <div className="chip">@klinika_tanuki</div>
              </div>
              <button className="content-link dark-scheme">
                <a
                  href="https://www.instagram.com/klinika_tanuki/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos
                </a>
              </button>
            </article>
          </section>
          <footer>
            <img src={klinikaTanukiLogo} alt="" />
            <p className="footer-text">
              © 2025 Klinika Tanuki. Todos los derechos reservados.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
