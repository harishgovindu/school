import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/welcome">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
