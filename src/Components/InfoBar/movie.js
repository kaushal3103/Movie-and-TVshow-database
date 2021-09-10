import React from 'react';
import { calcTime,convertMoney} from '../../helpers';
import PropTypes from 'prop-types';
const InfoBar =({time,budget,revenue})=>(
    
    <div className="InfoBar">
        <div className="IBcontent">
            <div className="column">
                <p className="p7">Running Time:{calcTime(time)}</p>
            </div>
             <div className="columnr">
                <p className="p7">Budget:{convertMoney(budget)}</p>
            </div>
             <div className="column">
                <p className="p7">Revenue:{convertMoney(revenue)}</p>
            </div>
        </div>
    </div>
    
)
InfoBar.propTypes={
    time:PropTypes.number,
    budget:PropTypes.number,
    revenue:PropTypes.number,
}

export default InfoBar;