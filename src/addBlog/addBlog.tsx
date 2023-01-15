import s from "../components/blog/Blog.module.css";
import arrowRight from "../img/arrow_right.svg";
import arrowBack from "../img/arrowBack.svg";
import bigAva from "../img/photoBigAvatar.svg";
import styles from './AddBlog.module.css'
import {useNavigate} from "react-router-dom";
import {clearCurrentBlogAC, setCurrentBlogIdAC, toggleAddBlogFormAC} from "../reducers/appReducer";
import {useAppDispatch} from "../redux/store";
import {AddInput} from "../addInput/addInput";

import {TextAreaField} from "../components/textAreaField/textAreaField";
import {Button} from "../components/buttons/button/button";

export const AddBlog = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const goBackToBlogs = () => {
        dispatch(clearCurrentBlogAC())
        dispatch(setCurrentBlogIdAC(''))
        navigate('/blogs')
        dispatch(toggleAddBlogFormAC())
    }
    return (
        <div className={s.blogWrapper}>
            <div className={s.titleWrapper}>
                <h3 className={s.title}>Blogs</h3>
                <img src={arrowRight} alt="arrow"/>
                <p>Add</p>
            </div>
            <div onClick={goBackToBlogs} className={s.navigateBack}>
                <img src={arrowBack} alt="back"/>
                <span className={s.text}>Back to blogs</span>
            </div>
            <div className={s.content}>
                <div className={s.blogAvatar}>
                    <img className={s.imgBig} src={bigAva} alt="blogImg"/>
                </div>
                <div className={styles.container}>
                    <AddInput title={'Blog Name'}/>
                    <AddInput title={'Website'}/>
                    <div className={styles.descriptionWrapper}>
                        <h4 className={styles.titleDescription}>Blog Description</h4>
                        <TextAreaField/>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button title={'Add Blog'} color={'#FCFBFB'} background={'#F8346B'} callback={() => {
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}