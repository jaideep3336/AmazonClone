import React from 'react'
import "../Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
function Header() {
  const [{basket}] = useStateValue()
  return (
    <div className='header'>
<Link to="/">
<img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
</Link>
        <div className='header__search'>
<input className='header__searchInput' type='text' />
<SearchIcon className='header__searchIcon' />
        </div>
        <div className='header__nav'>
          <Link to='/login'>
<div className='header__option'>
<span className='header__optionlineOne'>
Hello, Guest
</span>
<span className='header__optionlineTwo'>
Sign in
</span>
</div>
</Link>
<Link to='/orders'>
<div className='header__option'>
<span className='header__optionlineOne'>
Returns
</span>
<span className='header__optionlineTwo'>
&Orders
</span>
</div>
</Link>
<div className='header__option'>
<span className='header__optionlineOne'>
Your
</span>
<span className='header__optionlineTwo'>
Prime
</span>
</div>
<Link to="/checkout">
<div className='header__optionBasket'>
  <ShoppingBasketIcon />
<span className='header__optionlineTwo header__basketCount'>
{basket.length}
</span>
</div>
</Link>


        </div>
    </div>
  )
}

export default Header