import Animation from "../../components/animaton/Animation";
import style from "./Landing.module.css"
import ChooseLooksSection from "./choose_looks_section/ChooseLooksSection";
import MainSection from "./main_section/MainSection";
import MoreAboutUsSection from "./moer_about_us_section/MoreAboutUsSection";
import { motion } from "framer-motion";
let Landing = () => {
    let animationSetting = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.6 }
        })
    }
    return (
        <div className={style.landing}>
            {/* <Animation> */}
            <section>
                <MainSection />
            </section>
            {/* </Animation> */}
            {/* viewport={{ amount: 0.1 }}  */}
            <motion.div initial="hidden" whileInView='visible' className={style.block}>
                <motion.section custom={1} variants={animationSetting}>
                    <ChooseLooksSection />
                </motion.section>

                <motion.section custom={2} variants={animationSetting}>
                    <MoreAboutUsSection />
                </motion.section>

            </motion.div>

        </div>
    );
}

export default Landing;
