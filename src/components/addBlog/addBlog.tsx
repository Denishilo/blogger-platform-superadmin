import s from "../blog/Blog.module.css";
import bigAva from "../../img/photoBigAvatar.svg";
import styles from './AddBlog.module.css'
import {useNavigate} from "react-router-dom";
import {clearCurrentBlogAC, setCurrentBlogIdAC, toggleAddBlogFormAC} from "../../reducers/appReducer";
import {useAppDispatch} from "../../redux/store";
import {Button} from "../buttons/button/button";
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import {addNewBlogTC} from "../../reducers/blogsReducer";
import {ItemTitle} from "../itemTitle/itemTitle";
import {GoBackSection} from "../goBackSection/goBackSection";

export const AddBlog = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const goBackToBlogs = () => {
        dispatch(clearCurrentBlogAC())
        dispatch(setCurrentBlogIdAC(''))
        navigate('/blogs')
        dispatch(toggleAddBlogFormAC())
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            websiteUrl: '',
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
        onSubmit(values) {
            dispatch(toggleAddBlogFormAC())
            dispatch(addNewBlogTC(values))
            formik.resetForm()
            navigate('/blogs')
        }
    })

    return (
        <div className={s.blogWrapper}>
            <ItemTitle name={'Blogs'} addBlogs={true}/>
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
                            <Button title={'Add Blog'} color={'#FCFBFB'} background={'#F8346B'} callback={() => {
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