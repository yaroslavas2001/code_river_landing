import { FC } from "react";
import style from "./TextMask.module.css"
type TextMaskType = {
    image: string
    text: string
}
let TextMask: FC<TextMaskType> = ({ image, text }) => {
    return (
        <img className={style.svg} src={image} alt={text} />
    );
}

export default TextMask;
