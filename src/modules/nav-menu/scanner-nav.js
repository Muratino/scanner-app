import { Component } from 'react';
import './scanner-nav.css';


class ScannerNav extends Component {
    constructor(props) { // eslint-disable-line
        super(props);        
    }

    render(){
        return (
            <>
                <div className="scanner__button">
                    <a 
                        className='home' 
                        href="/"
                        // onClick={this.buttons}
                        >
                        Дом
                    </a>
                    <a 
                        className='scannng__a' 
                        href="/scanner"       
                        // onClick={this.buttons}
                        >
                        Сканировать
                    </a>
                    <a 
                        className='save__a' 
                        href="/save"
                        // onClick={this.buttons}
                        >
                        Сохраненные
                    </a>
                </div>
            </>
        );
    }
}

export default ScannerNav;