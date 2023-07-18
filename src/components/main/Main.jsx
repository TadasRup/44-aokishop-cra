import style from './Main.module.css';
import { Column } from './Columns';

export function Main() {
    return (
    <main className={style.main}>
     <div className={style.main1}>
        <h2 className={style.main1text1}>
            Well begun is half done
        </h2>
        <h6 className={style.main1text2}>
            Complete the following steps to sell
        </h6>
     </div>
     </main>
);
}