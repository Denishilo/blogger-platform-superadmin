import s from './Posts.module.css'
import {SelectField} from "./select/selectField";
import {CompressedPost} from "./compressedPost/compressedPost";
import {BasicButton} from "../buttons/busicButton/basicButton";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {deletePostsAC, getPostsTC, PostType} from "../../reducers/postsReducer";
import {ItemTitle} from "../itemTitle/itemTitle";

export const Posts = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector<PostType[]>(state => state.posts)

    useEffect(() => {
        dispatch(getPostsTC())
        return () => {
            dispatch(deletePostsAC())
        }
    }, [])
    const postsList = posts.map(post => {
        return <CompressedPost key={post.id} post={post}/>
    })

    return (
        <div className={s.postsWrapper}>
            <ItemTitle name={'Posts'}/>
            <SelectField/>
            <div className={s.postsContainer}>
                {postsList}
            </div>
            <BasicButton/>
        </div>
    )
}