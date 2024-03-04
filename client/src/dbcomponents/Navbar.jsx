
import {SearchOutlined} from '@ant-design/icons'
import {MenuOutlined} from '@ant-design/icons'

function Navbar () {
    return (
        <div>
            <div className='navi'>
                <nav>
                    <div className="navbar">
                        <div className="link">
                            <ul className='links'>
                                <li><a href="Comedy">comedy</a></li>
                                <li><a href="Drama">Drama</a></li>
                                <li><a href="Kids">Kids</a></li>
                                <li><a href="Theatre">Theatre</a></li>
                                <li><a href="Popular">Popular</a></li>
                            </ul>
                        </div>
                        <div className="inp">
                            <input type="text" placeholder="Enter movie" className='enter-movie' />
                            <button className='search'>
                                <SearchOutlined  />
                            </button>
                        </div>
                        <div className="toggle">
                            <MenuOutlined />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;