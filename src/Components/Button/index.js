import React from 'react';
import PropTypes from 'prop-types';
const button =({text,callback})=>(
<button className="button" onClick={callback}>
{text}
</button>
)

button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
}

export default button;