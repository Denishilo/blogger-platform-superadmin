import s from './EditDeleteBlog.module.css'
import {OptionSection} from "./optionSection/optionSection";
import deleteIcon from '../../img/deleteIcon.svg'
import editIcon from '../../img/edit.svg'

export const EditDeleteBlog = (props: EditDeleteBlogPropsType) => {
    const {setModalActive, setIsShowOptions, id} = props

    const deleteBlogHandler = () => {
        setModalActive(true)
        setIsShowOptions(false)

    }
    const editBlogHandler = () => {
        console.log('edit')
    }
    return (
        <div className={s.content}>
            <div className={s.section} id={`popUpEditMode${id}`}>
                <OptionSection callback={deleteBlogHandler} img={deleteIcon} title={'Delete'}/>
                <OptionSection callback={editBlogHandler} img={editIcon} title={'Edit'}/>
            </div>
        </div>
    )
}

//// types

type EditDeleteBlogPropsType = {
    setModalActive: (value: boolean) => void
    setIsShowOptions: (value: boolean) => void
    id: string
}