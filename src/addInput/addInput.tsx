import s from './AddInput.module.css'
import TextField from '@mui/material/TextField';

export const AddInput = (props: AddInputPropsType) => {
    const {title} = props
    return (
        <div className={s.blogNameWrapper}>
            <h4 className={s.blogTitle}>{title}</h4>
            <form className={s.form}>
                <TextField className={s.textField} id="standard-basic"  variant="standard" />
            </form>

        </div>
    )
}

//// types

export type AddInputPropsType = {
    title: string,

}