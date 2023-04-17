import style from "./MainSection.module.css"
import androidImage from "./../../../assets/image/android.svg"
import appleImage from "./../../../assets/image/apple.svg"
import mainImage from "./../../../assets/image/text_image.svg"
import TextMask from "../../../components/text_mask/TextMask"
import mountains from "./../../../assets/image/slider/mountains.jpg"
import { motion } from "framer-motion";
import MTextMask from "../../../components/text_mask/TextMask"

let MainSection = () => {
    let animationSetting = {
        hidden: {
            x: -50,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    let animationImageSetting = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    return (
        <div className={style.block}>
            <motion.div initial="hidden" whileInView='visible' className={style.block_info}>
                <motion.div variants={animationSetting} custom={1} className={style.apps_block}>
                    <div className={style.apps_icon_block}>
                        <div className={style.app_icon}>
                            <img src={appleImage} alt="apple icon" />
                        </div>
                        <div className={`${style.app_icon} ${style.android} `}>
                            <img src={androidImage} alt="android icon" />
                        </div>
                    </div>
                    <p>App available</p>
                </motion.div>

                <motion.div variants={animationSetting} custom={2} className={style.big_text}>
                    CHOOSE YOUR
                    <div className={style.row}>
                        WINTER
                        <div className={style.title_selection}> LOOK </div>
                        *
                    </div>
                    <div className={style.special}>APPAREL</div>
                </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView='visible' className={style.text_mask}>
                <MTextMask variants={animationImageSetting} custom={1}  text="CREATE" image={mainImage}></MTextMask>
            </motion.div>
        </div>
    );
}

export default MainSection;
