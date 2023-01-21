import s from './AddEditPostPopup.module.css'
import closeIcon from "../../img/closeIcon.svg";
import addEditPicture from '../../img/addEditPost.svg'
import TextField from "@mui/material/TextField";
import {Button} from "../buttons/button/button";
import {useFormik} from "formik";
import {SearchField} from "../searchField/searchField";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setEditPostModeAC} from "../../reducers/appReducer";

export const AddEditPostPopup = (props: AddEditPostPopupPropsType) => {
    const isEdit = useAppSelector<boolean>(state => state.app.isEditPostMode)
    const {active, setActive} = props
const dispatch =  useAppDispatch()
    const cancelDelete = () => {
        setActive(false)
        dispatch(setEditPostModeAC(false))
    }
    useEffect(()=>{

    },[isEdit])
    const formik = useFormik({
        initialValues: {
            postName: '',
            blog: '',
            description: '',
        },
        validate(values) {
            const errors: ErrorsType = {}
            if (!values.postName) {
                errors.name = 'Required'
            }
            if (!values.description) {
                errors.description = 'Required'
            }
            if (!values.blog) {
                errors.websiteUrl = 'Required'
            }
            if (values.description.length > 500) {
                errors.description = 'Max length of description is 500 symbols'
            }
            return errors
        },
        async onSubmit(values) {
            // dispatch(toggleAddBlogFormAC())
            // await dispatch(addNewBlogTC(values))
            formik.resetForm()
            // navigate('/blogs')
        }
    })

    return (
        <div className={active ? `${s.wrapper} ${s.active}` : s.wrapper} onClick={cancelDelete}>
            <div className={active ? `${s.content} ${s.contentActive}` : s.content} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className={s.titleWrapper}>
                    <h3>Add/Edit Post</h3>
                    <div onClick={cancelDelete} className={s.imgWrapper}>
                        <img src={closeIcon} alt="close"/>
                    </div>
                </div>
                <div className={s.imgBlock}>
                    <img src={addEditPicture} alt="avatar"/>
                </div>
                <div className={s.contentForm}>
                    <form onSubmit={formik.handleSubmit}>

                        <div className={s.info}>

                            <TextField label='Post name' className={s.textField} id="standard-basic"
                                       variant="standard"
                                       {...formik.getFieldProps('postName')}

                            />
                            {formik.touched.postName && formik.errors.postName &&
                                <div style={{color: 'red'}}>{formik.errors.postName}</div>}

                            {!isEdit && <SearchField/>}
                            {/*<TextField label='Blog' className={s.textField} id="standard-basic"*/}
                            {/*           variant="outlined" {...formik.getFieldProps('blog')}*/}
                            {/*/>*/}
                            {/*{formik.touched.blog && formik.errors.blog &&*/}
                            {/*    <div style={{color: 'red'}}>{formik.errors.blog}</div>}*/}
                            <div>
                                <h4 className={s.titleDescription}>Description</h4>
                                <TextField
                                    {...formik.getFieldProps('description')}
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={5} fullWidth
                                    className={s.descriptionTextField}
                                />
                                {formik.touched.description && formik.errors.description &&
                                    <div style={{color: 'red'}}>{formik.errors.description}</div>}
                            </div>
                            <div className={s.buttonWrapper}>
                                <Button title={'Publish'} color={'#FCFBFB'} background={'#FB85A6'} callback={() => {
                                }}/>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}


////////////types/////////////

export type AddEditPostPopupPropsType = {
    isAdd?: boolean,
    isEdit?: boolean,
    active?: boolean,
    setActive: (value:boolean) => void
}

type ErrorsType = {
    name?: string,
    websiteUrl?: string,
    description?: string,
}