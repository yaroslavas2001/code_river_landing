import { FC, MutableRefObject, Ref, useEffect, useRef, useState } from "react";
import style from "./Slider.module.css"
import ISlider from "../../models/ISlider";
import left from "./../../assets/image/slider/arrow_left.svg"
import right from "./../../assets/image/slider/arrow_right.svg"
import { motion, useTransform, useMotionValue } from "framer-motion";
export type TitleBlockType = {
    sliderList: Array<ISlider>
}
let Slider: FC<TitleBlockType> = ({ sliderList }) => {
    let [width, setWidth] = useState(0)
    let carousel: any = useRef()
    let step = 150
    useEffect(() => {
        if (carousel !== undefined)
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)

    })
    let sliderItem = sliderList.map((el, index) =>
        <motion.div className={style.slider_item} key={index}>
            <img className={style.slider_item_img} src={el.image} alt={el.alt} />
        </motion.div>)

    let xx = useMotionValue(200)
    const x = useTransform(
        xx,
        [0, width],
        [1, 0]
    )
    let leftf = () => {
        if (x.get() < 0)
            x.set(x.get() + step)
    }
    let rightF = () => {
        if (x.get() > -width)
            x.set(x.get() - step)
    }
    return (
        <div className={style.slider}>
            <button className={`${style.slider_btn}  ${style.slider_btn_left}`} onClick={leftf}>
                <img src={left} alt="arrow left" />
            </button>
            <motion.div ref={carousel} className={style.carousel}>
                <motion.div drag="x" style={{ x }} dragConstraints={{ right: 0, left: -width }} className={style.inner_carousel}>
                    {sliderItem}
                </motion.div>
            </motion.div>
            <button className={`${style.slider_btn} ${style.slider_btn_right}`} onClick={rightF}>
                <img src={right} alt="arrow right" />
            </button>
        </div>
    );
}

export default Slider;
