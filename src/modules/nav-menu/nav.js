import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SaveBlok from '../scanner-save/scanner-save';
import Scanning from '../scanner-scann/scanner-scann';
import Home from '../scanner-home/home';

const Nav = (props) => {
    const [itmes, setItems] = useState([]); 
    useEffect(() => {
        fetch("https://62bdc6edc5ad14c110c685b7.mockapi.io/ArrNew")
        .then(data => data.json())
        .then(arr => setItems(arr))
    }, [])
     
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/scanner" element={<Scanning />} />
                <Route path="/save" element={<SaveBlok data={itmes}/>} />
            </Routes>
        </Router>
    );
}

export default Nav;