import s from "../blog/Blog.module.css";
import arrowRight from "../../img/arrow_right.svg";

export const ItemTitle = (props: ItemTitlePropsType) => {
    const {name, nameBlog, showItem, addBlog,editBlog} = props
    return (
        <div className={s.titleWrapper}>
            <h2 className={s.title}>{name}</h2>
            {showItem && <img src={arrowRight} alt="arrow"/>}
            {showItem && <p>{nameBlog}</p> }
            {editBlog && <img src={arrowRight} alt="arrow"/>}
            {addBlog && <img src={arrowRight} alt="arrow"/>}
            {editBlog && <p>Edit</p>}
            {addBlog && <p>Add</p>}
        </div>
    )
}

////////////// types ////////////////

export type ItemTitlePropsType = {
    name: string,
    showItem?: boolean,
    nameBlog?: string
    addBlog?:boolean,
    editBlog?:boolean
}