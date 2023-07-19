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
        <div className={style.main2}>
                <h4 className={style.main2text1}>
                     1.Certification
                </h4>
                <h6 className={style.main2text2}>
                    Upload qualification information
                </h6>
        <div className={style.main3}>
                <h4 className={style.main3text1}>
                    2.Upload a product
                </h4>
                <h6 className={style.main3text2}>
                    Fill in product information
                </h6>
            </div>
        <div className={style.main4}>
                <h4 className={style.main4text1}>
                    3.Open for sale
                </h4>
                <h6 className={style.main4text2}>
                    Choose to open any sales channel
                </h6>
            </div>
        </div>
     </div>
     </main>
);
}