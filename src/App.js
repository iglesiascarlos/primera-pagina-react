import './css/normalize.css';
import './css/reset.css';
import './css/App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
  let menu = ['Inicio', 'Autor', 'Empresa', 'Contacto']

  return (
    <div className="App">
      <Menu menu={menu}/>
      <Header img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
      <Body />
      <Footer menu={menu}/>
    </div>
  );
}
