import './App.css'

// Componente Landing con header y sección principal
export function Landing() {
  return (
    <>
      <header>
        <img
          src="https://images.seeklogo.com/logo-png/44/2/messi-logo-png_seeklogo-444984.png"
          alt="Logo o imagen de cabecera"
        />
        <nav>
          <a href="">News</a>
          <a href="">Social</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Booking</a>
          <a href="">Art</a>
        </nav>
      </header>

      <section className="landing">
        <h1>Football</h1>
        <h1>LEYEND</h1>
        <div className="arrow"></div>
      </section>
    </>
  );
}
