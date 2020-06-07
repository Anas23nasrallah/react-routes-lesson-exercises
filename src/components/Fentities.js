import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        const fentityCategory = this.props.match.params.fentities
        const fentities = this.props.state[fentityCategory]
        let fentityName = this.props.match.params.name
        const link = "/directory/" + fentityCategory + "/" 
        return (
            <div>
                <h1 id="fentities-title">{fentityCategory}</h1>
                <div id="fentities-container">
                    {fentities.map(f => {
                        return (
                            <Link to={link + f.name}>
                                <div className="mini">
                                    <img className="directory-img" src={f.imgUrl} alt="" />
                                    <span>{f.name}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>)
    }
}

export default Fentities