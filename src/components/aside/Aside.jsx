import style from './Aside.module.css';
import { SlHome } from 'react-icons/sl';

export function Aside() {
    return (
        <aside className={style.aside}>
            <div className={style.asideleft}>
                <SlHome className='arrow' size='5rem' color='#aaa' />
            </div>
        </aside>
);
}