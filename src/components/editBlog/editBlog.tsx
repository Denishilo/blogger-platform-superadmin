import s from "../blog/Blog.module.css";
import bigAva from "../../img/photoBigAvatar.svg";
import styles from '../addBlog/AddBlog.module.css'
import {useNavigate} from "react-router-dom";
import {clearCurrentBlogAC, setCurrentBlogIdAC} from "../../reducers/appReducer";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {Button} from "../buttons/button/button";
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import {ItemTitle} from "../itemTitle/itemTitle";
import {GoBackSection} from "../goBackSection/goBackSection";
import {useEffect} from "react";
import {deleteBlogsAC, editBlogTC} from "../../reducers/blogsReducer";

export const EditBlog = () => {
    const nameBlog = useAppSelector<string>(state => state.app.currentBlog.name)
    const blogId = useAppSelector<string>(state => state.app.currentBlog.id)
    const description = useAppSelector<string>(state => state.app.currentBlog.description)
    const websiteUrl = useAppSelector<string>(state => state.app.currentBlog.websiteUrl)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const goBackToBlogs = () => {
        dispatch(clearCurrentBlogAC())
        dispatch(setCurrentBlogIdAC(''))
        navigate('/blogs')
    }
    const formik = useFormik({
        initialValues: {
            name: nameBlog,
            description: description,
            websiteUrl: websiteUrl,
        },
        validate(values) {
            const errors: ErrorsType = {}
            if (!values.name) {
                errors.name = 'Required'
            }
            if (!values.description) {
                errors.description = 'Required'
            }
            if (!values.websiteUrl) {
                errors.websiteUrl = 'Required'
            }
            if (values.description.length > 500) {
                errors.description = 'Max length of description is 500 symbols'
            }
            return errors
        },
       async onSubmit(values) {
            dispatch(clearCurrentBlogAC())
            dispatch(setCurrentBlogIdAC(''))
           await dispatch(editBlogTC(blogId,values))
                formik.resetForm()
                navigate('/blogs')


        }
    })

    return (
        <div className={s.blogWrapper}>
            <ItemTitle name={'Blogs'} showItem={true} editBlog={true} nameBlog={nameBlog}/>
            <GoBackSection callback={goBackToBlogs} title={'blogs'}/>
            <div className={s.content}>
                <div className={s.blogAvatar}>
                    <img className={s.imgBig} src={bigAva} alt="blogImg"/>
                </div>
                <div className={styles.container}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.blogNameWrapper}>
                            <TextField label='Blog name' className={styles.textField} id="standard-basic"
                                       variant="standard"
                                       {...formik.getFieldProps('name')}


                            />
                            {formik.touched.name && formik.errors.name &&
                                <div style={{color: 'red'}}>{formik.errors.name}</div>}
                            <TextField label='Website' className={styles.textField} id="standard-basic"
                                       variant="standard" {...formik.getFieldProps('websiteUrl')}
                            />
                            {formik.touched.websiteUrl && formik.errors.websiteUrl &&
                                <div style={{color: 'red'}}>{formik.errors.websiteUrl}</div>}
                        </div>
                        <div className={styles.descriptionWrapper}>
                            <h4 className={styles.titleDescription}>Blog Description</h4>
                            <TextField
                                {...formik.getFieldProps('description')}
                                id="outlined-multiline-static"
                                multiline
                                rows={5}
                                className={styles.descriptionTextField}
                            />
                            {formik.touched.description && formik.errors.description &&
                                <div style={{color: 'red'}}>{formik.errors.description}</div>}
                        </div>
                        <div className={styles.buttonWrapper}>
                            <Button title={'Edit Blog'} color={'#FCFBFB'} background={'#F8346B'} callback={() => {
                            }}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

//// types
type ErrorsType = {
    name?: string,
    websiteUrl?: string,
    description?: string,
}