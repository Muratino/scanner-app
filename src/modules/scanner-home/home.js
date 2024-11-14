import { Component } from "react";
import './home.css';
import logo from '../app/icon/qr-code.png'

class Home extends Component{
    render() {
        return (
            <div className="home__block">
                <img src={logo} alt="logo" />
                <div className="info__block">
                    <div className="info__title">
                        <h2>QR SCANNER GT</h2>  
                    </div>
                    <div className="another__info">
                        <b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolore veniam facilis deleniti amet minus harum aliquam aliquid sunt porro voluptas laborum illo? Dolore, tempore.</b>
                    </div>
                </div>
            </div>
        );
    }
}
    


export default Home;