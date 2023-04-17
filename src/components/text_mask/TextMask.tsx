import { FC } from "react";
import style from "./TextMask.module.css"
import { motion } from "framer-motion";
import { forwardRef } from "react";
type TextMaskType = {
    image: string
    text: string
}
let TextMask: FC<TextMaskType> = forwardRef(({ image, text }, ref: any) => {
    return (
        <img ref={ref} className={style.svg} src={image} alt={text} />
    );
})
const MTextMask = motion(TextMask);
export default MTextMask
