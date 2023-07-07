import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
import womanImg from '../../assets/woman.jpg'
import { useState } from 'react'
import { logout } from '../../redux/authSlice'
import { useDispatch,useSelector } from 'react-redux'
const Navbar = () => {
  const [showModal, setShowModal] = useState(false)


  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>MyBlogs</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Contacts</li>
          <li className={classes.listItem}>Categories</li>
        </ul>
        <div className={classes.right}>
          <img onClick={() => setShowModal(prev => !prev)} src={womanImg} className={classes.img} />
          {showModal &&
            <div className={classes.modal}>
              <Link to='/create'>Create</Link>
              {user && <span onClick={handleLogout}> {user.username} Logout</span>}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar