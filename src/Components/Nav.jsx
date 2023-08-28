import React from 'react'
import styles from './Nav.module.scss'
import logo from '../Assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src={logo} alt='logo'/>
            <h2>iTranslate</h2>
        </div>

        <div className={styles.navItems}>
        <Link to={'/translate'}> <li>Translate</li> </Link>
        <li>About Developer</li>
        <li>About Google Translator AI</li>
        </div>

    </div>
  )
}
