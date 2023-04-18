import style from "./Landing.module.css"
import ChooseLooksSection from "./choose_looks_section/ChooseLooksSection";
import MainSection from "./main_section/MainSection";
import MoreAboutUsSection from "./moer_about_us_section/MoreAboutUsSection";
import { motion } from "framer-motion";
let Landing = () => {
    let animationChooseLook = {
        hidden: {
            x: -200,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                delay: custom * 0.6
            }
        })
    }
    let animationMoreAbout = {
        hidden: {
            x: 200,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                delay: custom * 0.6
            }
        })
    }
    return (
        <div className={style.landing}>
            <section>
                <MainSection />
            </section>
            {/* viewport={{ amount: 0.1 }}  */}
            <motion.div initial="hidden" whileInView='visible' className={style.landing__sections}>
                <motion.section custom={1} variants={animationChooseLook}>
                    <ChooseLooksSection />
                </motion.section>

                <motion.section custom={2} variants={animationMoreAbout}>
                    <MoreAboutUsSection />
                </motion.section>
            </motion.div>
        </div>
    );
}

export default Landing;
