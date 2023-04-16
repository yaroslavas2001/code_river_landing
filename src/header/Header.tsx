import style from "./Header.module.css"
import IMenu from "../models/IMenu"
import { NavLink } from 'react-router-dom';
function Header() {
    let menuList: Array<IMenu> = [
        { path: '/other', name: "Clothes" },
        { path: '/other', name: "Sneakers" },
        { path: '/other', name: "Bags" },
        { path: '/other', name: "Accessorize" },
    ]
    let menuItems = menuList.map((el =>
        <NavLink key={el.name} to={el.path} className={style.menu_item}>
            {el.name}
        </NavLink>))

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

        </header>
    );
}

export default Header;
