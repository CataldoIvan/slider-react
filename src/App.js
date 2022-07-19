import Slider from "../src/Slider/Slider";
import ImgUno from "./Imgs/uno.jpg";
import ImgDos from "./Imgs/dos.jpg";
import ImgTres from "./Imgs/tres.jpg";
import app from "./app.png";
import slider from "./slider.png";
import slidercss from "./slider-css.png";
import styles from './App.module.css'

function App() {
  // Creo array de imagenes para mostrar,simulanod que se haria la peticion de esta info a el server
  const img = [ImgUno, ImgDos, ImgTres];

  return (
    <div className={styles.App}>
      <Slider imagenes={img} />

      <br/>
      <br/>
      <section >
        <img className={styles.codigo} src={app} alt="" />
        <img className={styles.codigo} src={slidercss} alt="" />
        <img className={styles.codigo} src={slider} alt="" />
        
      </section>
    </div>
  );
}

export default App;
