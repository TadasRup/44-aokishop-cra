import { RiArrowDownSLine } from 'react-icons/ri';
import style from './Aside.module.css';
import { SlHome } from 'react-icons/sl';
import { RiLiveLine } from 'react-icons/ri';
import { CiShop } from 'react-icons/ci';
import { BsBag } from 'react-icons/bs';
import { PiNotebookBold } from 'react-icons/pi';
import { BsClipboardData } from 'react-icons/bs';
import { HiOutlineCurrencyYen } from 'react-icons/hi';
import { GiCubes } from 'react-icons/gi';
import { FiSettings } from 'react-icons/fi';


export function Aside() {
    return (
        <aside className={style.aside}>
            <nav className={style.nav}>
                <div className={style.logoname}>
                    <SlHome className={style.iconlogo} size='1.5rem' color='red' />
                    <a className={style.active}  href="/">Home</a>
                </div>
                <div className={style.logoname}>
                    <RiLiveLine className={style.iconlogo} size='1.5rem' color='#aaa' />
                    <a className={style.active} href="/">Live</a>
                </div>
                <div className={style.logoname}>
                    <CiShop className={style.iconlogo} size='1.5rem' color='#aaa' />
                    <a className={style.active} href="/">Shop</a>
                    <RiArrowDownSLine className={style.marks} size='1.5rem' color='#aaa' />
                </div>
                <div className={style.logoname}>
                    <BsBag className={style.iconlogo} size='1.5rem' color='#aaa' /> 
                    <a className={style.active} href="/">Commodity</a>  
                </div>
                <div className={style.logoname}>
                    <PiNotebookBold className={style.iconlogo} size='1.5rem' color='#aaa' /> 
                    <a className={style.active} href="/">Order</a>  
                <div className={style.logoname}>
                    <BsClipboardData className={style.iconlogo} size='1.5rem' color='#aaa' /> 
                    <a className={style.active} href="/">Data</a>  
                </div>
                <div className={style.logoname}>
                    <HiOutlineCurrencyYen className={style.iconlogo} size='1.5rem' color='#aaa' /> 
                    <a className={style.active} href="/">Assets</a>  
                </div>
                <div className={style.logoname}>
                    <GiCubes className={style.iconlogo} size='1.5rem' color='#aaa' /> 
                    <a className={style.active} href="/">Application</a>
                    <RiArrowDownSLine className={style.marks} size='1.5rem' color='#aaa' />
                </div>
                <div className={style.logoname}>
                    <FiSettings className={style.iconlogo} size='1.5rem' color='#aaa' /> 
                    <a className={style.active} href="/">Set up</a>  
                </div>
                </div>
            </nav>
        </aside>
);
}