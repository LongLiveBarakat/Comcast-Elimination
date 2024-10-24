import "./App.scss";
import barakt from "../src/assets/barakat.jpg";
import ghazal from "../src/assets/ghazal.png";
import habiba from "../src/assets/habiba.jpg";
import khaled from "../src/assets/khaled.jpg";
import shokry from "../src/assets/shokry.jpg";
import bembem from "../src/assets/bembem.jpg";
import anas from "../src/assets/anas.jpg";
import gaber from "../src/assets/gaber.jpg";
import hofy from "../src/assets/hofy.jpg";
import engy from "../src/assets/engy.png";
import saadany from "../src/assets/saadany.png";
import som3a from "../src/assets/som3a.jpg";
import manar from "../src/assets/manar.jpg";
import maryam from "../src/assets/maryam.jpg";
import hessein from "../src/assets/hessein.jpg";
import hazem from "../src/assets/hazem.jpg";
import muhab from "../src/assets/muhab.jpg";
import nadia from "../src/assets/nadia.jpg";
import yahya from "../src/assets/yahya.jpg";
import bolbol from "../src/assets/bolbol.jpg";
import x from "../src/assets/x.png";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="container">
      <div className="barakat">
        <img src={barakt} alt="" />
        <h1>Mohamed Barakat</h1>
        <p>The virus spreader</p>
      </div>

      <div className="other-people">
        <div className="ghazal box">
          <img src={ghazal} alt="" />
          <h1>Ghazal</h1>
        </div>
        <div className="habiba box">
          <img src={habiba} alt="" />
          <h1>Habiba</h1>
        </div>
        <div className="khaled box">
          <img src={khaled} alt="" />
          <h1>Khaled</h1>
        </div>
        <div className="shokry box">
          <img className="shokry-image" src={shokry} alt="" />
          <FontAwesomeIcon className="x" icon={faX} />
          <h1>Shokry</h1>
          <p>Eliminated</p>
        </div>
        <div className="bembem box">
          <img src={bembem} alt="" />
          <h1>BemBem</h1>
        </div>
        <div className="anas box">
          <img className="anas-image" src={anas} alt="" />
          <FontAwesomeIcon className="x" icon={faX} />
          <h1>Anas</h1>
          <p>Eliminated</p>
        </div>
        <div className="gaber box">
          <img className="gaber-image" src={gaber} alt="" />
          <FontAwesomeIcon className="x" icon={faX} />
          <h1>Gaber</h1>
          <p>Eliminated</p>
        </div>
        <div className="hofy box">
          <img className="hofy-image" src={hofy} alt="" />
          <FontAwesomeIcon className="x" icon={faX} />
          <h1>Hofy</h1>
          <p>Eliminated</p>
        </div>
        <div className="engy box">
          <img src={engy} alt="" />
          <h1>Engy</h1>
        </div>
        <div className="saadny box">
          <img className="saadany-image" src={saadany} alt="" />
          <FontAwesomeIcon className="x" icon={faX} />
          <h1>Saadany</h1>
          <p>Eliminated</p>
        </div>
        <div className="som3a box">
          <img src={som3a} alt="" />
          <h1>Som3a</h1>
        </div>
        <div className="manar box">
          <img src={manar} alt="" />
          <h1>Manar</h1>
        </div>
        <div className="maryam box">
          <img src={maryam} alt="" />
          <h1>Maryam</h1>
        </div>
        <div className="hussein box">
          <img src={hessein} alt="" />
          <h1>Menna Hessien</h1>
        </div>
        <div className="hazem box">
          <img src={hazem} alt="" />
          <h1>Menna Hazem</h1>
        </div>
        <div className="muhab box">
          <img src={muhab} alt="" />
          <h1>Muhab</h1>
        </div>
        <div className="nadia box">
          <img src={nadia} alt="" />
          <h1>Nadia</h1>
        </div>
        <div className="yahya box">
          <img src={yahya} alt="" />
          <h1>Yahya</h1>
        </div>
        <div className="bolbol box">
          <img className="bolbol-image" src={bolbol} alt="" />
          <FontAwesomeIcon className="x" icon={faX} />
          <h1>Belbesy</h1>
          <p>Eliminated</p>
        </div>
      </div>
    </div>
  );
}

export default App;
