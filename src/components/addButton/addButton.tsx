import s from './AddButton.module.css'

export const AddButton = (props: AddButtonPropsType) => {
    const {title} = props
    return (
        <div className={s.wrapper}>
            <button className={s.button}>{`Add ${title}`}</button>
        </div>
    )
}

//// types

export type AddButtonPropsType = {
    title: string
}
