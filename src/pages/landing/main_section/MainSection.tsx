import style from "./MainSection.module.css"
import androidImage from "./../../../assets/image/android.svg"
import appleImage from "./../../../assets/image/apple.svg"
import mainImage from "./../../../assets/image/text_image.svg"
import TextMask from "../../../components/text_mask/TextMask"
import mountains from "./../../../assets/image/slider/mountains.jpg"
let MainSection = () => {
    return (
        <div className={style.block}>
            <div className={style.block_info}>


                <div className={style.apps_block}>
                    <div className={style.apps_icon_block}>
                        <div className={style.app_icon}>
                            <img src={appleImage} alt="apple icon" />
                        </div>
                        <div className={`${style.app_icon} ${style.android} `}>
                            <img src={androidImage} alt="android icon" />
                        </div>
                    </div>
                    <p>App available</p>
                </div>

                <div className={style.big_text}>
                    CHOOSE YOUR
                    <div className={style.row}>
                        WINTER
                        <div className={style.title_selection}> LOOK </div>
                        *
                    </div>
                    <div className={style.special}>APPAREL</div>
                </div>
            </div>
            <div className={style.text_mask}>
                <TextMask text="CREATE" image={mainImage}></TextMask>

            </div>
        </div>
    );
}

export default MainSection;
