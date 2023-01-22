import s from './EditDeleteSection.module.css'
import {OptionSection} from "./optionSection/optionSection";
import deleteIcon from '../../img/deleteIcon.svg'
import editIcon from '../../img/edit.svg'
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/store";
import {AddEditPostPopup} from "../addEditPostPopup/addEditPostPopup";

import {setEditPostModeAC} from "../../reducers/appReducer";

export const EditDeleteSection = (props: EditDeleteBlogPropsType) => {
    const {setModalActive, setIsShowOptions, id, isAddPostOpen, toggleAddPostPopUp} = props

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const deleteHandler = () => {
        setModalActive(true)
        setIsShowOptions(false)
    }

    const editHandler = () => {
        if (toggleAddPostPopUp) {
            toggleAddPostPopUp(true)
            setIsShowOptions(false)
            dispatch(setEditPostModeAC(true))
        } else {
            navigate('/blogs/edit')
        }
    }

    if (isAddPostOpen) {
        return <AddEditPostPopup setActive={toggleAddPostPopUp ? toggleAddPostPopUp : () => {
        }} active={isAddPostOpen}/>
    }
    return (
        <div className={s.content}>
            <div className={s.section} id={`popUpEditMode${id}`}>
                <OptionSection callback={deleteHandler} img={deleteIcon} title={'Delete'}/>
                <OptionSection callback={editHandler} img={editIcon} title={'Edit'}/>
            </div>
        </div>
    )
}

////////// types

type EditDeleteBlogPropsType = {
    setModalActive: (value: boolean) => void
    setIsShowOptions: (value: boolean) => void
    id: string
    isAddPostOpen?: boolean,
    toggleAddPostPopUp?: (value: boolean) => void
}