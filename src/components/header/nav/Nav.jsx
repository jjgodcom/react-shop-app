import React from 'react'
import styles from './Nav.module.scss'
import { Link } from 'react-router-dom'
import {FiShoppingCart, FiUser, FiLogIn} from 'react-icons/fi'
import {GoSignOut} from 'react-icons/go'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <Link to={"/cart"}>
              {" "}
              <FiShoppingCart></FiShoppingCart>
            </Link>
          </div>
        </li>
        <li>
          <div className={styles.counter}>
            <Link to={"/order"}>
              {" "}
              <FiUser title="주문"></FiUser>
            </Link>
          </div>
        </li>
        <li>
          <GoSignOut className={styles.nav_sign_out} title='로그아웃'></GoSignOut>
          <Link to={"login"}>
            <FiLogIn title="로그인"></FiLogIn>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav