import style from "./Header.module.css"
import IMenu from "../models/IMenu"
import { NavLink } from 'react-router-dom';
import ModalWindow from "../components/ModalWindow/ModalWindow";
import { useState } from "react";
function Header() {
    let menuList: Array<IMenu> = [
        { path: '/other', name: "Clothes" },
        { path: '/other', name: "Sneakers" },
        { path: '/other', name: "Bags" },
        { path: '/other', name: "Accessorize" },
    ]
    let menuItems = menuList.map((el =>
        <NavLink key={el.name} to={el.path} className={style.menu_item} onClick={()=>{setIsShowMobileMenu(false)}}>
            {el.name}
        </NavLink>))
    let [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false)
        let closeModalWindow=()=>{

        }
    return (
        <header>
            <NavLink to={'/'} className={style.title}>
                LANDING
            </NavLink>
            <div className={style.header_block}>
                <nav>
                    {menuItems}
                </nav>
                <div className={style.buy_text}>BUY</div>
            </div>
            <div className={style.mobile_mune}>
                <button className={style.menu_btn} onClick={() => setIsShowMobileMenu(true)}>
                    <i className={style.menu_btn__inner}></i>
                </button>
                <ModalWindow isShow={isShowMobileMenu}>
                    <div className={style.mobile_menu_block}>
                        <nav>
                            {menuItems}
                        </nav>
                    </div>
                </ModalWindow>

            </div>
        </header>
    );
}

export default Header;
