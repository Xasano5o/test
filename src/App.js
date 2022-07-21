import React from 'react';
import Navbar1 from './Components/Navbar-1';
import Navbar2 from './Components/Navbar-2';
import Navbar3 from './Components/Navbar-3';
import './index.css'
import AngularIcon from './Assets/angular.png'
import Image from './Assets/img.png'


import One_prect from './comment/one.jsx'

export const App = () => {
    return (
        <div>
             <Navbar1 />
            <Navbar2 />
            <Navbar3 />  
            <div className='box'>
                <div className='menu_1'><One_prect amg={Image} /></div>
                <div className='menu_2'><One_prect amg={AngularIcon} /></div>
            </div>
        </div>
    )
}


export default App;
//  react 1-chi  qilgan ishim  😊 