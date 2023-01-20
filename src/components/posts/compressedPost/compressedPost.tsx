import s from './CompressedPost.module.css'
import mainImg from '../../../img/mainImgPost.svg'
import {useAppDispatch} from "../../../redux/store";
import {setCurrentPostIdAC} from "../../../reducers/appReducer";
import {PostType} from "../../../reducers/postsReducer";
import {useNavigate} from "react-router-dom";


export const CompressedPost = (props: CompressedPostPropsType) => {
    const dispatch = useAppDispatch()
    const {title, createdAt, blogName, id} = props.post
    const formatCreatedDate = new Date(createdAt).toLocaleDateString('ru')
    const navigate = useNavigate()

    const openPost = () => {
        dispatch(setCurrentPostIdAC(id))
        navigate(`/post/${id}`)
    }

    return (
        <div className={s.wrapper}>
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
            </div>
        </div>
    )
}

////// types

export type CompressedPostPropsType = {
    post: PostType
}