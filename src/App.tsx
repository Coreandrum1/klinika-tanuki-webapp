import "./App.css";
import alice from "./assets/images/alice.webp";
import kewpie from "./assets/images/kewpie.webp";
import theBeatles from "./assets/images/the-beatles.webp";
import kemonitoKuromi from "./assets/images/kemonito-kuromi.webp";
import axolotl from "./assets/images/axolotl.webp";
import alienCat from "./assets/images/alien-cat.webp";
import plushieBrown from "./assets/images/plushie-brown.webp";
import plushieGreen from "./assets/images/plushie-green.webp";

function App() {
  return (
    <section className="container">
      <article className="white-card">
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
          Le buscamos un nuevo hogar a todos esos objetos olvidados en el tiempo{" "}
        </p>
      </article>
      <article className="outline-card">
        <h2 className="font-title">stickers</h2>
        <div className="sticker-container">
          <img src={theBeatles} alt="" />
          <img src={kemonitoKuromi} alt="" />
          <img src={alienCat} alt="" />
          <img src={axolotl} alt="" />
        </div>
        <p className="description text-[var(--no-white)]">Diseños propios</p>
        <div className="chip-container">
          <div className="chip">@CORIANDER_ESCAMILLA</div>
          <div className="chip">@PEPPERJAM_ART</div>
          <div className="chip">@aleescamillapv</div>
        </div>
        <button className="content-link">Ver galería</button>
      </article>
      <article className="radioactive-card">
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
      </article>
      <article className="white-card">
        <h2 className="font-title">Peluches</h2>
        <div className="image-container-even">
          <img className="first-image" src={plushieBrown} alt="" />
          <img className="second-image" src={plushieGreen} alt="" />
        </div>
        <p className="description">Peluches/llavero hechos a mano</p>
        <div className="chip">@PEPPERJAM_ART</div>
      </article>
      <article className="outline-card">
        <h2 className="font-title">llaveros</h2>
      </article>
    </section>
  );
}

export default App;
