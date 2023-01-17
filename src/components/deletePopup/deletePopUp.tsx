import s from './DeletePopup.module.css'
import closeIcon from '../../img/closeIcon.svg'
import {Button} from "../buttons/button/button";
import {useEffect} from "react";

export const DeletePopUp = (props: DeletePopUpPropsType) => {
    const {active, setActive, deleteBlog} = props

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "auto";
            };
        }
    }, [active])

    const cancelDeleteBlog = () => {
        setActive(false)
    }

    const deleteBlogHandler = () => {
        deleteBlog('')
    }

    return (
        <div className={active ? `${s.wrapper} ${s.active}` : s.wrapper} onClick={cancelDeleteBlog}>
            <div className={active ? `${s.content} ${s.contentActive}` : s.content} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className={s.titleWrapper}>
                    <h3>Delete a blog</h3>
                    <div onClick={() => setActive(false)} className={s.imgWrapper}>
                        <img src={closeIcon} alt="close"/>
                    </div>
                </div>
                <p className={s.message}>Are you sure you want to delete this blog?</p>
                <div className={s.buttonsWrapper}>
                    <Button callback={cancelDeleteBlog} title={'No'} color={'#FCFBFB'} background={'#F8346B'}/>
                    <Button callback={deleteBlogHandler} title={'Yes'} color={'#F8346B'} background={'#FCFBFB'}/>
                </div>
            </div>
        </div>

    )
}
/// types
type DeletePopUpPropsType = {
    active: boolean,
    setActive: (value: boolean) => void
    deleteBlog: (id: string) => void
}