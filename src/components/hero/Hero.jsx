import style from './Hero.module.css';

export function Hero() {
    return (
    <hero className={style.hero}>
        <div className={style.hero1}>
                <h2 className={style.hero1text1}>
                    Well begun is half done
                </h2>
                <h6 className={style.hero1text2}>
                    Complete the following steps to sell
                </h6>
        <div className={style.hero2}>
                <h4 className={style.hero2text1}>
                     1.Certification
                </h4>
                <h6 className={style.hero2text2}>
                    Upload qualification information
                </h6>
        <div className={style.hero3}>
                <h4 className={style.hero3text1}>
                    2.Upload a product
                </h4>
                <h6 className={style.hero3text2}>
                    Fill in product information
                </h6>
            </div>
        <div className={style.hero4}>
                <h4 className={style.hero4text1}>
                    3.Open for sale
                </h4>
                <h6 className={style.hero4text2}>
                    Choose to open any sales channel
                </h6>
            </div>
        </div>
     </div>
     </hero>
);
}