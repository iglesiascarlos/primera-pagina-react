import '../css/Body.css'
import Tarjetas from './Tarjetas';

export default function Body() {
    return (
        <div className='tarjetas-container'>
            <Tarjetas desc='Esta es la primera tarjeta' imagen="https://estaticos.muyinteresante.es/uploads/images/gallery/5ebbef275bafe8db822fa69c/galeria-koalas.jpg" numeroDefault="1"/>
            
            <Tarjetas desc='Esta es la segunda tarjeta' imagen="https://static.nationalgeographic.es/files/styles/image_3200/public/01-waq-wildlife-std-NationalGeographic_2682117.jpg?w=1600&h=900" numeroDefault="2"/>
            
            <Tarjetas desc='Esta es la tercera tarjeta' imagen="https://parabienoparamal.com/wp-content/uploads/2022/05/Mayo-Semana-3-Quiz-930x620.jpg" numeroDefault="3"/>
        </div>
    );
}