//import { BsBellFill } from 'react-icons/bs';
import { RiArrowDownSLine } from 'react-icons/ri';
import logo from '../../img/logo.png';
import loginhead from '../../img/3135715.png';
import basiclogo from '../../img/basic2.png';
import style from './Header.module.css';

export function Header() {
    return (
        <header className={style.header}>
            <div className={style.left}>
                <img className={style.logo} src={logo} alt='Logo' />
                <h3 className={style.aokis} href="/">Aoki's Shop</h3>
                <RiArrowDownSLine className='arrow' size='1.5rem' color='#aaa' />
                <img className={style.basiclogo} src={basiclogo} alt='Logo' />
            </div>
            <nav className={style.nav}>
                <a className={style.active} href="/">Notice</a>
                <a className={style.active} href="/">Help center</a>
            </nav>
            <div>
            <img className={style.logo2} src={loginhead} alt='Loginhead' />
            <RiArrowDownSLine size='1.5rem' color='#aaa' />
            </div>
        </header>
    );
}