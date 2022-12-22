import Button from 'react-bootstrap/Button';
import playBtn from '../boton-de-play.png'
import '../PlayButton.css'

const PlayButton = () => {
    return (
        <div className="play-button--container">
           <Button className="play-button">
               <img src={playBtn} alt="Botón de play"></img>
            </Button> 
        </div>
    )
}

export default PlayButton;
