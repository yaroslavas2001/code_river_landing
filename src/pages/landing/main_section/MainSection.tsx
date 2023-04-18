import style from "./MainSection.module.css"
import androidImage from "./../../../assets/image/android.svg"
import appleImage from "./../../../assets/image/apple.svg"
import mainImage from "./../../../assets/image/text_image.svg"
import { motion } from "framer-motion";
import MTextMask from "../../../components/text_mask/TextMask"
// image for test
import smallImage from "./../../../assets/image/test_small_image.png"
import mountains from "./../../../assets/image/slider/mountains.jpg"

let MainSection = () => {
    let animationSetting = {
        hidden: {
            x: -50,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                delay: custom * 0.2
            }
        })
    }
    let animationImageSetting = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                delay: custom * 0.2
            }
        })
    }
    return (
        <div className={style.main__block}>
            <motion.div initial="hidden" whileInView='visible' className={style.info__block}>
                <motion.div variants={animationSetting} custom={1} className={style.apps__block}>
                    <div className={style.apps__block_icon}>
                        <div className={style.app__icon}>
                            <img src={appleImage} alt="apple icon" />
                        </div>
                        <div className={`${style.app__icon} ${style.android} `}>
                            <img src={androidImage} alt="android icon" />
                        </div>
                    </div>
                    <p>App available</p>
                </motion.div>

                <motion.div variants={animationSetting} custom={2} className={style.title__block}>
                    CHOOSE YOUR
                    <div className={style.title__block_inner}>
                        WINTER
                        <div className={style.title__block_selection}> LOOK </div>
                        *
                    </div>
                    <div className={style.title__block_special}>APPAREL</div>
                </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView='visible' className={style.mask__block}>
                <MTextMask variants={animationImageSetting} custom={1} text="CREATE" image={mainImage}></MTextMask>
            </motion.div>
        </div>
    );
}

export default MainSection;
