import React from 'react'

const Header = ({title}) => {
    return (
        <div>
            <div className="font-semibold text-2xl indent-10 tracking-widest"> {title} </div>
        </div>
    )
}

export default Header
