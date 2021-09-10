import React from 'react'
import RMDBLogo from '../../images/tmdb.svg';
import TMDBLogo from '../../images/poweredby.jpeg';
import { Link } from 'react-router-dom';
const Header = () =>(
     <div className="Header">
        <div className="Hcontent">
           
             <img src={RMDBLogo} alt="rmdb-logo" className="rmdblogo" />
                 <Link to="/">
                 <h3 className="movielink">
                 MOVIES
                 </h3>
               </Link >
               <Link to="/TVhome">
               <h3 className="tvlink"> TV SHOWS </h3>  
               </Link>
              <img src={TMDBLogo} alt="tmdb-logo" className="tmdblogo"/>          
               

        </div>
    </div>

)

export default Header;

