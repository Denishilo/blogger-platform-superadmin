import s from './OptionSection.module.css'

export const OptionSection = (props: OptionSectionPropsType) => {
    const {img, title, callback} = props
    return (
        <div onClick={callback} className={s.wrapper}>
            <div className={s.imgWrapper}>
                <img className={s.img} src={img} alt="icon"/>
            </div>
            <p>{title}</p>
        </div>
    )
}

/// types
export type OptionSectionPropsType = {
    img: string,
    title: string,
    callback: ()=>void,
}