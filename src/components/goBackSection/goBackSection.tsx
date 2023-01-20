import s from "../blog/Blog.module.css";
import arrowBack from "../../img/arrowBack.svg";

export const GoBackSection = (props: GoBackSectionPropsType) => {
    const {callback, title} = props
    return (
        <div onClick={callback} className={s.navigateBack}>
            <img src={arrowBack} alt="back"/>
            <span className={s.text}>Back to {title}</span>
        </div>
    )
}

///////////// types /////////////

export type  GoBackSectionPropsType = {
    callback: () => void
    title: string
}