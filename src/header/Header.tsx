import style from "./Header.module.css"
import IMenu from "../models/IMenu"
import { NavLink } from 'react-router-dom';
import ModalWindow from "../components/ModalWindow/ModalWindow";
import { LegacyRef, useEffect, useRef, useState } from "react";
function Header() {
    let menuList: Array<IMenu> = [
        { path: '/other', name: "Clothes" },
        { path: '/other', name: "Sneakers" },
        { path: '/other', name: "Bags" },
        { path: '/other', name: "Accessorize" },
    ]
    let [size, setSize] = useState(0)
    let [newSize, setNweSize] = useState(0)

    let hideModalWindow = () => { setIsShowMobileMenu(false) }
    let showModalWindow = () => { setIsShowMobileMenu(true) }
    let circle: any = useRef()
    let menuItems = menuList.map((el =>
        <NavLink key={el.name} to={el.path} className={style.menu_item} onClick={hideModalWindow}>
            {el.name}
        </NavLink>))
    let navElement = <nav>
        {menuItems}
    </nav>
    let [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false)
    let interval: any
    // let ennter = () => {
    //     setSize(circle.current.offsetWidth)
    //     setNweSize(circle.current.offsetWidth)
    //     console.log("enter", circle.current.offsetWidth)

    //     // circle.current.style.position = "absolute"
    //     // circle.current.style.right = "0px"
    //     interval = setInterval(() => {
    //         console.log("interval", newSize)
    //         circle.current.style.width = newSize + 'px'
    //         circle.current.style.height = newSize + 'px'

    //         setNweSize(newSize + 100)
    //     }, 1000);
    //     // console.log("enter", circle)
    //     // circle.current.style.width=400+'px'
    // }
    // let leave = () => {
    //     console.log("leavw")
    //     clearInterval(interval)
    //     // clear interval
    //     // circle.current.style.position = "relative"
    //     circle.current.style.width = size + 'px'

    // }
    // useEffect(() => {
    //     console.log("effect")
    // }, [newSize])
    return (
        <header>
            <NavLink to={'/'} className={style.title}>
                LANDING
            </NavLink>
            <div className={style.header_block}>
                {navElement}
                {/* onMouseEnter={ennter} onMouseLeave={leave} */}
                <div ref={circle}  className={style.buy_text}>BUY</div>
            </div>
            <div className={style.mobile_mune}>
                <button className={style.menu_btn} onClick={showModalWindow}>
                    <i className={style.menu_btn__inner} />
                </button>
                <ModalWindow isShow={isShowMobileMenu}>
                    <div className={style.mobile_menu_block}>
                        {navElement}
                    </div>
                </ModalWindow>
            </div>
        </header>
    );
}

export default Header;
