import React from 'react'
import styles from './Footer.module.scss'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.contacts}>
          <a href='https://github.com/jjgodcom/react-jjgodcom.com'>
            {" "}
            <BsGithub></BsGithub>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer