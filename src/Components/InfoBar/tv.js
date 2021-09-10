import React from 'react';
import PropTypes from 'prop-types';

const InfoBar =({season,episodes})=>(
<div className="InfoBar">
    <div className="IBcontent">
        <div className="column">
        <p className="col">Total number of seasons: {season}</p>
        </div>
        <div className="column">
        <p className="col">Total number of episodes: {episodes}</p>
        </div>
    </div>

</div>
);

InfoBar.propType={
    season:PropTypes.date,
    episodes:PropTypes.date,
}

export default InfoBar;