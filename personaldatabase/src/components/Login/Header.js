import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1 id="rcorners1">{title}</h1>
            <button className='loginButton'>LOGIN</button>
        </header>
    )
}

Header.defaultProps = {
    title: "Stamp auction database",
}

Header.protoTypes = {
    title: PropTypes.string.isRequired,
}

export default Header