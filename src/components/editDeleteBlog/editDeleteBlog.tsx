import s from './EditDeleteBlog.module.css'
import {OptionSection} from "./optionSection/optionSection";
import deleteIcon from '../../img/deleteIcon.svg'
import editIcon from '../../img/edit.svg'

export const EditDeleteBlog = ()=>{
    return (
        <div className={s.wrapper}>
            <div className={s.section}>
                <OptionSection img={deleteIcon} title={'Delete'}/>
                <OptionSection img={editIcon} title={'Edit'}/>
            </div>
        </div>
    )
}