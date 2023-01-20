import s from "../blog/Blog.module.css";
import arrowRight from "../../img/arrow_right.svg";

export const ItemTitle = (props: ItemTitlePropsType) => {
    const {name, nameBlog, showItem, addBlogs} = props
    return (
        <div className={s.titleWrapper}>
            <h2 className={s.title}>{name}</h2>
            {showItem && <img src={arrowRight} alt="arrow"/>}
            {showItem && <p>{nameBlog}</p> }
            {addBlogs && <img src={arrowRight} alt="arrow"/>}
            {addBlogs && <p>Add</p>}
        </div>
    )
}

////////////// types ////////////////

export type ItemTitlePropsType = {
    name: string,
    showItem?: boolean,
    nameBlog?: string
    addBlogs?:boolean,
}