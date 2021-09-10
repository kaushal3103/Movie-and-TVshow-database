import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Movie from './Components/Movie';
import NotFound from './Components/NotFound';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import TVhome from './Components/TVhome';
import TVshow from './Components/TVshow';

const App =()=>(
   <Router>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:movieId" element={<Movie />} />
    <Route path ="/*" element={<NotFound />} /> 
    <Route path ="/TVhome" element={<TVhome />} />
    <Route path ="/TVhome/:tvId" element={<TVshow />} />
    
    </Routes>
   </Router>
)



export default App;
