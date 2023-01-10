import '../css/Header.css';

export default function Header(props) {
    
    return (

        <header>
            <h1>Primera Página en React</h1>
            <img src={props.img} alt="" className='imagenRandom'/>
        </header>
    )
}