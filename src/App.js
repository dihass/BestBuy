import React, { useState } from 'react';
import './App.css';
import Headerbar from './Headerbar';
import Function from './Function';
import Footer from './Footer';


function App() {
  const [isAdvancedSearchVisible, setIsAdvancedSearchVisible] = useState(false);

  const [searchVal, setSearchVal]=useState("");
  const [isSale, setSaleRent]=useState();
  const headerSearch=(searchTerm,isSale)=>{
    setSearchVal(searchTerm);
    setSaleRent(isSale);
  }

  const toggleAdvancedSearch = () => {
    setIsAdvancedSearchVisible(!isAdvancedSearchVisible);
  };

  return (
    <div className="App">
      <Headerbar headerSearch={headerSearch}/>
    
      {isAdvancedSearchVisible && (
        <div className='app-inner-div'>
          <lable>type</lable>
          <form>
            <label for="dropdown">Select an option:</label>
            <select id="dropdown" name="dropdown">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </form>
          <lable>price</lable>
          <input type="text"></input>
          <input type="text"></input>
          <lable>bedrooms</lable>
          <input type="text"></input>
          <input type="text"></input>
          <lable>date added</lable>
          <input type="date"></input>
          <input type="date"></input>
      
          <button> search </button>
        </div>
      )}
      <div className='App-innerdiv'>
        <Function searchVal={searchVal} isSale={isSale}/>
        {/*<Avilable />*/}
        {/*<Favourites />*/}
      </div>
      <Footer />
    </div>
  );
}

export default App;
