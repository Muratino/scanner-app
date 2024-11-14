import { Component } from 'react';
import burger from './burger new.png';
import './burger.css';


class Burger extends Component {
    constructor(props) { // eslint-disable-line
        super(props);        
    }

    menu = () => {
        const menu = document.querySelector('.burger__menu');
        menu.classList.toggle('hyden')
    }

    render(){
        return (
            <>
            <div className="burger__img">
              <img src={burger} alt="burger"
                onClick={this.menu}
              />
            </div>
            <div className="burger__menu hyden">
              <div className="burger__block">
                <div className="burger__item">
                    <a className='home' href="/"> Дом </a>
                </div>
                <div className="burger__item">
                    <a className='scannng__a' href="/scanner"> Сканировать:3 </a>
                </div>
                <div className="burger__item">
                    <a className='save__a' href="/save"> Сохраненные </a>
                </div>
              </div>
            </div>
            </>
        );
    }
}

export default Burger;