import React, { useState, useEffect } from "react";
import "./App.css";
import audioFile from "./Componentes/Audio/Stephen Sanchez - Until I Found You (Official Video).mp3";
import img1 from "./Componentes/Img/IMG_0132.JPEG"
import img2 from "./Componentes/Img/IMG_0158.JPEG"
import img3 from "./Componentes/Img/IMG_1032.JPEG"
import img4 from "./Componentes/Img/IMG_1770.JPEG"
import img5 from "./Componentes/Img/IMG_1526.JPEG"
import img6 from "./Componentes/Img/IMG_2214.JPEG"
import img7 from "./Componentes/Img/IMG_2640.JPEG"
import img8 from "./Componentes/Img/IMG_4052.JPEG"
import img9 from "./Componentes/Img/IMG_4976.JPEG"
import img11 from "./Componentes/Img/IMG_5132.JPEG"
import img12 from "./Componentes/Img/IMG_2782.JPEG"
import img13 from "./Componentes/Img/20230205_193951.jpg"
import img14 from "./Componentes/Img/20230216_233221.jpg"
import img15 from "./Componentes/Img/20230324_060131.jpg"
import img16 from "./Componentes/Img/20230416_001822.jpg"

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img11, img12, img13, img14, img15, img16];

const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [password, setPassword] = useState("");
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(audioFile));

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5; 
  }, [audio]);

  const playMusic = () => {
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(error => console.log("Error al reproducir:", error));
  };


  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "quesoo") {
      setShowMessage(true);
    } else {
      alert("Contraseña incorrecta, intenta de nuevo");
    }
  };

  return (
    <div className="container">
      {!isPlaying && (
        <button className="learn-more" onClick={playMusic}>🎵 Reproducir Música</button>
      )}
      {!showMessage ? (
        <div className="password-section">
          <h1 className="title">Ingresa la contraseña</h1>
          <h4 className="pista">Pista: "Morshitoo" </h4>
          <form onSubmit={handlePasswordSubmit}>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Contraseña" 
              className="input"
            /><br></br>
            <button type="submit" class="learn-more">Entrar</button>
          </form>
        </div>
      ) : (
        <div className="celebration">
                    <img className="deco" src="https://static.vecteezy.com/system/resources/thumbnails/014/464/019/small_2x/flag-love-valentine-for-decoration-png.png"></img>
          <img className="deco1" src="https://i.pinimg.com/originals/a0/ba/95/a0ba951828efe9613d64db6e5b4f33e7.gif"></img>
          <img className="deco2" src="https://media.tenor.com/zSx3dlZb7AcAAAAj/mochikana.gif"></img>
          <h1 className="title">¡Felices 2 años!</h1>
          <div className="images">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Foto ${index + 1}`} className="photo scattered" />
            ))}
          </div>
          <div className="letter-container" onClick={() => setIsLetterOpen(!isLetterOpen)}>
            <div className={`letter ${isLetterOpen ? "open" : "closed"}`}>
              {isLetterOpen ? (
                <div>
                <img className="gatitos" src="https://i.pinimg.com/originals/1b/3b/9d/1b3b9d2325221542b4f2b23973a12cf9.gif"></img>
                <img className="gatitos" src="https://i.pinimg.com/originals/fd/35/30/fd3530b992c00cc1556a794a306cef45.gif"></img>

                  <p><mark>04/02/2023</mark></p>
              <p>Dos años, 730 días desde que me pediste ese beso, algo que en 2023 no  lo creería, que la chica más hermosa que haya conocido me haya pedido un beso, que la chica de ojitos hermosos que me ignoraba por los pasillos del top me esté pidiendo un beso. <br></br>

              Me enamore como si fuera la primera vez sintiéndome así, como si nunca hubiera amado antes, como si fueras mi primer amor. Porque me ensañaste cosas que nunca antes había aprendido, tanto como en relación cómo para uno propio, que aunque estemos distanciados, peleados o sin tiempo siempre tengo que enfocarme en mis metas y en crecer personalmente, me enseñaste a amar y demostrar mis emociones. 
              Quizás no sea la persona perfecta para vos, cometo errores, tengo miles de defectos, pero hago lo posible por seguir enamorándote , por hacerte feliz, día a día me esfuerzo por darte lo mejor de mi, para que te sientas bien y te sientas feliz junto a mi.<br></br>
              Te siento como si fueras mi primer amor porque despertaste  cosas o sentimientos que nunca tuve, que desde que estamos vos tuviste la paciencia y el amor necesario para despertarmelos o sacarlos a la luz, siento que me renovaste.<br></br>
              
              Cada día que te vuelvo a ver, me enamoro de nuevo como ese 4 de febrero.<br></br>
              
              Felices 2 años💕💘<br></br>
              (Perdón por redacción de niño de primaria)</p>
              </div>
              ) : (
                <p className="letter-preview">💌</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
