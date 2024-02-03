import React, {useState} from 'react';
import './Headerbar.css';
import logo from './images/logo.jpg';

function Headerbar({headerSearch}) {
  const [inputValue, setInputValue] = useState('');

  const handleClickSale = () =>{

    headerSearch(inputValue,1)
  }
  const handleClickRent = () =>{
    headerSearch(inputValue,0)
  }

  return (
    <div className='main'>
        <div className='headerbar-main'>
            <img className='logo-headerbar' src={logo}/>
            <h2>Best Buy</h2>
            <div className='headerbar-main-searchbox'>
                <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" className='headerbar-main-searchbox-component' placeholder='Location or Postcode...'/>
                    <div className="search-buttonset">
                        <button onClick={handleClickSale}>For Sale</button>
                        <button onClick={handleClickRent}>To Rent</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Headerbar;