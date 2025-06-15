import "./App.css";

function App() {
  return (
    <section className="ink-container">
      <div className="positioner">
        <div className="main-title-container">
          <h1 className="londrina-solid-regular">KLINIKA</h1>
          <h1 className="londrina-solid-regular text-below">TANUKI</h1>
          <span className="title-badge">
            <h2 className="big-shoulders-700">colectivo</h2>
          </span>
        </div>
        <img
          alt="klinika-tanuki"
          className="klinika-tanuki-logo"
          src="klinika_tanuki_contorno.webp"
        />
        <div className="subtitle-container">
          <h2 className="barlow-condensed-extrabold">MIEMBROS</h2>
          <div className="members-list">
            <a
              className="special-elite-regular"
              href="https://instagram.com/coriander_escamilla"
              target="_blank"
              rel="noopener noreferrer"
            >
              @coriander_escamilla
            </a>
            <a
              className="special-elite-regular"
              href="https://instagram.com/pepperjam_art"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pepperjam_art
            </a>
            <a
              className="special-elite-regular"
              href="https://instagram.com/aleescamillapv"
              target="_blank"
              rel="noopener noreferrer"
            >
              @aleescamillapv
            </a>
          </div>
        </div>
        <div className="upcoming-container">
          <div className="upcoming-title">
            <h2 className="barlow-condensed-extrabold">PRÓXIMO</h2>
            <h2 className="barlow-condensed-extrabold">EVENTO</h2>
          </div>
          <p className="special-elite-regular">Paralelicuaro</p>
          <div className="event-component special-elite-regular">
            <div className="digit">09</div>
            <p className="separator">/</p>
            <p className="digit">12</p>
            <p className="separator">/</p>
            <p className="digit">25</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
