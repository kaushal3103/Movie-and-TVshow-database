import React,{ useState, useEffect} from 'react';
import  searchIcon from '../../images/search-icon.svg';
import PropTypes from 'prop-types';
const SearchBar = ({setSearchTerm}) =>{
    const [state,setState] = useState('');


    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(state) ;
        },500);
        return () => clearTimeout(timer);
    },[setSearchTerm ,state]);

return(
<div className="SearchBar">
<div className="SBcontent">
<img src={searchIcon} alt="search-icon" className="searchicon"/>
<input 
    type="text" 
    placeholder="Search Movie"
    onChange={event => setState(event.currentTarget.value)}
    value={state}
    className="input"
/>
</div>
</div>
)

};

SearchBar.propTypes ={
    setSearchTerm:PropTypes.func,
}

export default SearchBar;