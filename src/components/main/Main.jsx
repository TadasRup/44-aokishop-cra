import style from './Main.module.css';
import cl1img from '../../img/column1image.png';
import cl2img from '../../img/column2image.png';
import cl3img from '../../img/column3image.png';
import cl5img from '../../img/column5image.png';
import Photo1 from '../../img/WeChat.png';
import Photo2 from '../../img/Greenconnect.png';
import Photo3 from '../../img/Blueconnect.png';
import Photo4 from '../../img/Coupon.png';
import Photo5 from '../../img/Marketblue.png';
import Photo6 from '../../img/Advertisement.png';
import Photo7 from '../../img/Currencytag.png';
import Photo8 from '../../img/GreenStats.png';



export function Main () {


    
    return (
        <main className={style.main}>
            <div className={style.maintext}>
                Today's data
            </div>
            <div className={style.maincl1}>
                <img className={style.cl1img} src={cl1img} alt='Logo' />
            </div>
            <div className={style.paytxt} >
                <h3>Payment amount</h3>
                <h1>8,992</h1>
                <h5>Yesterday 8638</h5>
            </div>
            <div className={style.maincl2}>
            <div className={style.paytxt2}>
                <h3>Live stream viewers</h3>
                <h1>23,466</h1>
                <h5>Yesterday 22089</h5>
            </div>
            </div>
            <div className={style.maincl3}>
                <img className={style.cl2img} src={cl2img} alt='Logo' />
            <div className={style.paytxt3}>
                <h3>Payment order</h3>
                <h1>793</h1>
                <h5>Yesterday 753</h5>
            </div>
            </div>
            <div className={style.maincl4}>
            <div className={style.paytxt4}>
                <h3>New attention</h3>
                <h1>24,890</h1>
                <h5>Yesterday 3800</h5>
            </div>
            </div>
            <div className={style.maincl5}>
                <img className={style.cl3img} src={cl3img} alt='Logo' />
            <div className={style.paytxt5}>
                <h3>Paying customer</h3>
                <h1>280</h1>
                <h5>Yesterday 320</h5>
                </div>
            </div>
            <div className={style.maincl6}>
            <div className={style.paytxt6}>
                <h3></h3>
                <h1></h1>
                <h5></h5>
            </div>
            </div>
            <div className={style.maincl7}>
                <img className={style.cl5img} src={cl5img} alt='Logo' />
            <div className={style.paytxt11}>
                <h3>Pending orders</h3>
                <h1>480</h1>
                <h5>Yesterday 470</h5>
                </div>
            </div>
            <div className={style.maincl8}>
            <div className={style.paytxt12}>
                <h3>Cumulative attention</h3>
                <h1>135,743</h1>
                <h5>Yesterday 130493</h5>
            </div>
            </div>
            <div className={style.paytxt6}>
                <h3>Number of order</h3>
                <h1>5,249</h1>
                <h5>Yesterday 4680</h5>
            </div>
            <div className={style.maintextbottom}>
                Operations Assistant
            </div>
            <div>
            <img className={style.photo1} src={Photo1} alt='Logo' />
            </div>
            <div>
            <img className={style.photo2} src={Photo2} alt='Logo' />
            </div>
            <div>
            <img className={style.photo3} src={Photo3} alt='Logo' />
            </div>
            <div>
            <img className={style.photo4} src={Photo4} alt='Logo' />
            </div>
            <div>
            <img className={style.photo5} src={Photo5} alt='Logo' />
            </div>
            <div>
            <img className={style.photo6} src={Photo6} alt='Logo' />
            </div>
            <div>
            <img className={style.photo7} src={Photo7} alt='Logo' />
            </div>
            <div>
            <img className={style.photo8} src={Photo8} alt='Logo' />
            </div>
        </main>
    )
}