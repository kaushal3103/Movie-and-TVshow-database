import React,{useState,useEffect} from 'react';
import searchIcon from '../../images/search-icon.svg';
import PropTypes from 'prop-types';
const SearchBar =({setSearchTerm1})=>{
const [state,setState] = useState('');

useEffect(()=>{
const timer = setTimeout(()=>{
setSearchTerm1(state);
},500);
return() => clearTimeout(timer);
},[setSearchTerm1,state])

return (
    <div className="SearchBar">
        <div className="SBcontent">
          <img src={searchIcon} alt="search-icon" className="searchicon" />
          <input type="text"
          placeholder="Search Movie"
          onChange={event => setState(event.currentTarget.value)}
          value={state}
          className="input"
          />
        </div>

    </div>
)
}
SearchBar.propTypes ={
    setSearchTerm:PropTypes.func,
}


export default SearchBar;