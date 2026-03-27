import { LOGO_URL } from '../utils/constants'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  // let btnName = "Login"

  const cartItems = useSelector((store) => store.cart.items);

  const {loggedInUser} = useContext(UserContext);

  const [btnName, setbtnName] = useState('Login')
  let count = 0
  return (
    <div className='flex justify-between m-2 shadow-lg bg-pink-100 sm:bg-yellow-100 lg:bg-green-100'>
      <div className='logo-container'>
        <img className='w-32' src={LOGO_URL} alt='logo' />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-10'>
          <li className='px-4'>
            <Link to='./'> Home </Link>{' '}
          </li>
          <li className='px-4'>
            <Link to='./grocery'> Grocery </Link>{' '}
          </li>
          <li className='px-4'>
            <Link to='./about'>About</Link>
          </li>
          <li>
            <Link to='./contact'>Contact</Link>
          </li>
          <li className='px-4'>
            <Link to="./cart" >Cart ({cartItems.length} items)
            </Link>
            </li>
          <li className='px-4'>{loggedInUser}</li>
          <button
            className='login-btn'
            onClick={() => {
              (btnName == "Login")? setbtnName('Logout'): setbtnName('Login')
            }}>
            {' '}
            {btnName}
          </button>

        </ul>
      </div>
    </div>
  )
}

;<img className='logo' src={LOGO_URL}></img>

export default Header
