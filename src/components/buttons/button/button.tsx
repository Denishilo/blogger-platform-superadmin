import s from './Button.module.css'

export const Button = (props: DeleteButtonPropsType) => {
    const {title, color, background, callback} = props
    return (
        <div className={s.wrapper}>
            <button type={'submit'} onClick={()=>callback(true)} className={s.button} style={{color: `${color}`, background: `${background}`}}>
                {title}
            </button>
        </div>
    )
}
//// types
export type DeleteButtonPropsType = {
    title: string,
    color: string,
    background: string
    callback: (value:boolean) => void
}