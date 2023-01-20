import s from "../compressedBlog/CompressedBlog.module.css";
import {NavLink} from "react-router-dom";

export const BlogInfo = (props: BlogInfoPropsType) => {
    const {callback, name, isShowMoreInfo, description, websiteUrl, date} = props

    return (
        <div className={s.container}>
            <h3 onClick={callback} className={s.title}>{name}</h3>
            {isShowMoreInfo && <p className={s.createDate}>Blog creation date: {date}</p>}
            <p className={s.linkWrapper}>
                Website: <NavLink to={websiteUrl}>{websiteUrl}</NavLink>
            </p>
            <p className={s.description}>
                {description}
            </p>
        </div>
    )
}

/////////// types /////////////

export type BlogInfoPropsType = {
    callback?: () => void,
    date?: string,
    name: string,
    isShowMoreInfo: boolean,
    websiteUrl: string,
    description: string,
}