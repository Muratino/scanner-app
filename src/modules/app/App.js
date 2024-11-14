import ScannerNav from '../nav-menu/scanner-nav';
import Nav from '../nav-menu/nav';
import Burger from '../burger/burger';
import './App.css';
// import logo from './icon/scanner.jpg';
import logo from './icon/qr-code.png';

function App() {
  return (
    <>
      <div className="header">
        <div className="header__row">
          <div className="img__block">
            <img className='imeg' src={logo} alt="logo" />
            <p>QR Scanner</p>
          </div>
            <ScannerNav />
            <Burger />
        </div>
      </div>
        <div className="content">
          <Nav />
        </div>
    </>
  );
}

export default App;
