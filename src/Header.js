import React from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './Header.css'
import {useStateValue} from './StateProvider';

function Header() {
        const [{basket},dispatch]=useStateValue();
    return (
        // create amazon logo
              // input feild and search icon
        // 3 links sigin cart prime
      <nav className="header">
      <Link to="/">
      <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
      </Link>


    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <SearchIcon className="header__searchIcon"/>
      </div>
        
      <div className="header__nav">
      <Link to="/login" className="header__link">
      <div className="header__option">
      <span className="header__optionLineOne">Hello.</span>
      <span className="header__optionLineTwo">Sign in</span>
      </div>
      </Link>

      <Link to="/checkout" className="header__link">
      <div className="header__option">
      <span className="header__optionLineOne">Returns</span>
      <span className="header__optionLineTwo">& Orders</span>
      </div>
      </Link>

      <Link to='/prime' className="header__link">
      <div className="header__option">
      <span className="header__optionLineOne">Try</span>
      <span className="header__optionLineTwo">Prime</span>
      </div>
      </Link>

        <Link to='/checkout' className='header__link'>
        <ShoppingBasketIcon className="header__optionbasket"/>
        <span className="header__basketcount">{basket?.length}</span>
        </Link>
      </div>

      </nav>
    )
}

export default Header
