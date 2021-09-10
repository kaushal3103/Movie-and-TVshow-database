import React from 'react'
import PropTypes from 'prop-types'

const Actor =({imageURL,name,character})=>(
    <div className="Actor">
        <img src={imageURL} alt="actor-thumb" className="img8" />
        <h3 className="h8">{name}</h3>
        <h3 className="p8">{character}</h3>
    </div>
)
Actor.prototypes ={
    name: PropTypes.string,
    character: PropTypes.string,
    imageURL:PropTypes.string
}
export default Actor ;