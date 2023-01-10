import '../css/Tarjetas.css';
import { useState } from 'react';

export default function Tarjetas(props) {
    const [numero, setNumero] = useState(props.numeroDefault);

    const numerosAleatorios = () => {
        const n = Math.round(Math.random() * 100);
        setNumero(n);
    }

    return (
        <div className="tarjeta">
            <figure class="imagen">
                <img src={props.imagen} alt=""/>
                <hr class="hrpicture" />
                <figcaption>{props.desc}</figcaption>
                <button onClick={numerosAleatorios}>Numero Aleatorio</button>
                <figcaption>{numero}</figcaption>
            </figure>
        </div>
    )
}