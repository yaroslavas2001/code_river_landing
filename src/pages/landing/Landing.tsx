import style from "./Landing.module.css"
import ChooseLooksSection from "./choose_looks_section/ChooseLooksSection";
import MainSection from "./main_section/MainSection";
import MoreAboutUsSection from "./moer_about_us_section/MoreAboutUsSection";
let Landing = () => {
    return (
        <div className={style.landing}>
            <section>
                <MainSection />
            </section>
            <div className={style.block}>
                <section>
                    <ChooseLooksSection />
                </section>
                <section>
                    <MoreAboutUsSection />
                </section>
            </div>

        </div>
    );
}

export default Landing;
