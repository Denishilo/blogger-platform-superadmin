import s from "../navigation/Navigation.module.css";
import {NavLink} from "react-router-dom";

export const NavItem = (props: NavItemPropsType) => {
    const {callback, navName, imgSrc} = props
    return (
        <NavLink onClick={callback} to={'/blogs'} className={s.navItem}>
            <div className={s.navImg}><img className={s.img} src={imgSrc} alt="icon"/>
            </div>
            <p className={s.navItemTitle}>{navName}</p>
        </NavLink>
    )
}
////////////////////// types //////////////////////
export type NavItemPropsType = {
    callback: () => void,
    navName: string,
    imgSrc: string,

}