import "./App.css";

// Componente Landing con header y sección principal
export function Gallery() {
  return (
    <>
      <section className="gallery">
        {/* Agrega src válidos para que se vean imágenes */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" alt="gallery 1" />
        <img src="https://fifpro.org/media/ovzgbezo/messi_w11_2024.jpg" alt="gallery 2" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGv0ZIrLidHrXmxdSY38qwW3_FyQZhJo-sFQ&s" alt="gallery 3" />
        <img src="https://www.fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000" alt="gallery 4" />
        <img src="https://img.a.transfermarkt.technology/portrait/big/28003-1740766555.jpg?lm=1" alt="gallery 5" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCjgVv-4Cl9Z-XQT3uCV_KKtjPzSNG-q2XA&s" alt="gallery 6" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVRQUiLZMMBawmw2483gS0iCOUXhvrvzYWg&s" alt="gallery 7" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqR2GFIgqpSmVEl_VtTLbA85ZPRCJ5lJD36Q&s" alt="gallery 8" />
      </section>
    </>
  );
}
