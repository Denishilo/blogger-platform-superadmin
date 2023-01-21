import s from './Posts.module.css'
import {CompressedPost} from "./compressedPost/compressedPost";
import {BasicButton} from "../buttons/busicButton/basicButton";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {deletePostsAC, getPostsTC, PostType} from "../../reducers/postsReducer";
import {ItemTitle} from "../itemTitle/itemTitle";
import {Button} from "../buttons/button/button";
import {AddEditPostPopup} from "../addEditPostPopup/addEditPostPopup";

export const Posts = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector<PostType[]>(state => state.posts)

    const [isAddPostOpen, setIsAddPostOpen] = useState<boolean>(false)

    const toggleAddPostPopUp = (value:boolean) => {
        setIsAddPostOpen(value)
    }

    useEffect(() => {
        dispatch(getPostsTC())
        return () => {
            dispatch(deletePostsAC())
        }
    }, [])

    const postsList = posts.map(post => {
        return <CompressedPost key={post.id} post={post} isAddPostOpen={isAddPostOpen} toggleAddPostPopUp={toggleAddPostPopUp}/>
    })

    if(isAddPostOpen){
        return <AddEditPostPopup active={isAddPostOpen} setActive={toggleAddPostPopUp} isAdd={true}/>
    }
    return (
        <div className={s.postsWrapper}>
            <ItemTitle name={'Posts'}/>
            <div className={s.addButtonWrapper}>
                <Button callback={toggleAddPostPopUp} title={'Add post'} color={'#FCFBFB'}
                        background={'#F8346B'}/>
            </div>
            <div className={s.postsContainer}>
                {postsList}
            </div>
            <BasicButton/>

        </div>
    )
}