import { FC } from "react";
import style from "./TitleBlock.module.css"
export type TitleBlockType = {
    title: string
    children: Array<JSX.Element> | JSX.Element
}
let TitleBlock: FC<TitleBlockType> = ({ title, children }) => {
    return (
        <div className={style.title_block}>
            <h2 className={style.title}>{title}</h2>
            {children}
        </div>
    );
}

export default TitleBlock;
