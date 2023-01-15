import s from './EditDeleteBlog.module.css'
import {OptionSection} from "./optionSection/optionSection";
import deleteIcon from '../../img/deleteIcon.svg'
import editIcon from '../../img/edit.svg'
import {useEffect} from "react";

export const EditDeleteBlog = () => {

    useEffect(()=>{
        window.addEventListener('onClick',(e)=>{

        })
    },[])

    const deleteBlogHandler = () => {
        console.log('delete')
    }
    const editBlogHandler = () => {
        console.log('edit')
    }
    return (
        <div className={s.wrapper}>
            <div className={s.section} id={'popUpEditMode'}>
                <OptionSection callback={deleteBlogHandler} img={deleteIcon} title={'Delete'}/>
                <OptionSection callback={editBlogHandler} img={editIcon} title={'Edit'}/>
            </div>
        </div>
    )
}