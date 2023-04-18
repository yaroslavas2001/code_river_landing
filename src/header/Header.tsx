import style from "./Header.module.css"
import IMenu from "../models/IMenu"
import { NavLink } from 'react-router-dom';
import ModalWindow from "../components/ModalWindow/ModalWindow";
import { useRef, useState } from "react";
function Header() {
    let menuList: Array<IMenu> = [
        { path: '/other', name: "Clothes" },
        { path: '/other', name: "Sneakers" },
        { path: '/other', name: "Bags" },
        { path: '/other', name: "Accessorize" },
    ]

    let hideModalWindow = () => { setIsShowMobileMenu(false) }
    let showModalWindow = () => { setIsShowMobileMenu(true) }

    let menuItems = menuList.map((el =>
        <NavLink key={el.name} to={el.path} className={style.nav__item} onClick={hideModalWindow}>
            {el.name}
        </NavLink>))

    let navElement = <nav>
        {menuItems}
    </nav>

    let [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false)
    return (
        <header>
            <NavLink to={'/'} className={style.header__title}>
                LANDING
            </NavLink>
            <div className={style.header__nav}>
                {navElement}
                {/* onMouseEnter={ennter} onMouseLeave={leave} */}
                <div className={style.buy_text}>BUY</div>
            </div>

            <div className={style.mobile__mune}>
                <button className={style.menu_btn} onClick={showModalWindow}>
                    <i className={style.menu_btn__inner} />
                </button>
                <ModalWindow isShow={isShowMobileMenu}>
                    <div className={style.mobile_menu_nav}>
                        {navElement}
                    </div>
                </ModalWindow>
            </div>
        </header>
    );
}

export default Header;
