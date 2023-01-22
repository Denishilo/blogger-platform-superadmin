import s from './CompressedPost.module.css'
import mainImg from '../../../img/mainImgPost.svg'
import {useAppDispatch} from "../../../redux/store";
import {setCurrentPostAC, setCurrentPostIdAC} from "../../../reducers/appReducer";
import {deletePostTC, PostType} from "../../../reducers/postsReducer";
import {useNavigate} from "react-router-dom";
import {DeletePopUp} from "../../deletePopup/deletePopUp";
import {useState} from "react";
import burgerDots from "../../../img/burgerDots.svg";
import {EditDeleteSection} from "../../editDeleteSection/editDeleteSection";

export const CompressedPost = (props: CompressedPostPropsType) => {
    const dispatch = useAppDispatch()
    const {title, createdAt, blogName, id} = props.post
    const {post} = props
    const {isAddPostOpen,toggleAddPostPopUp} = props
    const formatCreatedDate = new Date(createdAt).toLocaleDateString('ru')
    const navigate = useNavigate()

    const [isShowOptions, setIsShowOptions] = useState<boolean>(false)
    const [modalActive, setModalActive] = useState<boolean>(false)

    const openPost = () => {
        dispatch(setCurrentPostIdAC(id))
        navigate(`/post/${id}`)
    }

    const deletePost = () => {
        setModalActive(false)
        dispatch(deletePostTC(id))
    }
    const toggleOptions = () => {
        setIsShowOptions(!isShowOptions)
        dispatch(setCurrentPostAC(post))
    }

    return (
        <div className={s.wrapper}>
            {isShowOptions && <div className={s.emptyWrapper} onClick={() => setIsShowOptions(false)}></div>}
            <div onClick={openPost} className={s.imgContainer}>
                <img className={s.mainImg} src={mainImg} alt="avatar"/>
            </div>
            <div className={s.infoContainer}>

                <div className={s.imgDescription}>
                    <img className={s.img} src={mainImg} alt="avatar"/>
                </div>
                <div className={s.content}>
                    <h3 onClick={openPost} className={s.title}>{title}</h3>
                    <p className={s.description}>{blogName}</p>
                    <p className={s.date}>{formatCreatedDate}</p>
                </div>

                <div className={s.burgerWithOption}>
                    <img onClick={toggleOptions} className={s.burgerDotsImg} src={burgerDots} alt="burger"/>
                    {isShowOptions && <div className={s.editWrapper}>
                        <EditDeleteSection setModalActive={setModalActive} setIsShowOptions={setIsShowOptions}
                                           id={id} isAddPostOpen={isAddPostOpen} toggleAddPostPopUp={toggleAddPostPopUp}/>
                    </div>}
                </div>
            </div>
            <DeletePopUp title={'post'} active={modalActive} setActive={setModalActive} deleteItem={deletePost}/>
        </div>
    )
}

////// types

export type CompressedPostPropsType = {
    post: PostType
    isAddPostOpen: boolean,
    toggleAddPostPopUp:(value:boolean)=>void
}