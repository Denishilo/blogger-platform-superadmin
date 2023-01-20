import s from './Post.module.css'
import imgPost from '../../../img/photoBigAvatar.svg'
import imgBlog from '../../../img/imgBlogs.svg'
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {clearCurrentPostAC, openPostTC, setCurrentPostIdAC} from "../../../reducers/appReducer";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ItemTitle} from "../../itemTitle/itemTitle";
import {GoBackSection} from "../../goBackSection/goBackSection";

export const Post = () => {

    useEffect(() => {
        dispatch(openPostTC(currentPostId))
    }, [])

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const currentPostId = useAppSelector<string>(state => state.app.currentPostId)
    const blogName = useAppSelector<string>(state => state.app.currentPost.blogName)
    const createdAt = useAppSelector<string>(state => state.app.currentPost.createdAt)
    const content = useAppSelector<string>(state => state.app.currentPost.content)
    const title = useAppSelector<string>(state => state.app.currentPost.title)
    const createdDate = new Date(createdAt).toLocaleDateString('ru')
    const createdTime = new Date(createdAt).toLocaleTimeString()

    const backToPosts = () => {
        dispatch(clearCurrentPostAC())
        dispatch(setCurrentPostIdAC(''))
        navigate('/posts')
    }

    return (
        <div className={s.postWrapper}>
            <ItemTitle name={'Posts'} showItem={true} nameBlog={blogName}/>
            <GoBackSection callback={backToPosts} title={'posts'}/>
            <div className={s.blogInfo}>
                <div className={s.blogInfoImgWrapper}>
                    <img className={s.blogInfoImg} src={imgBlog} alt="avatar"/>
                </div>
                <p>{blogName}</p>
            </div>
            <div>
                <h2 className={s.postTitle}>{title}</h2>
                <p className={s.date}>{`${createdDate} at ${createdTime}`}</p>
                <div className={s.postPicture}>
                    <img className={s.imgPost} src={imgPost} alt="picture"/>
                </div>
                <p className={s.postText}>{content}</p>
            </div>
        </div>
    )
}

