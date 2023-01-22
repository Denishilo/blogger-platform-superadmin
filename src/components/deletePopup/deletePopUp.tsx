import s from './DeletePopup.module.css'
import closeIcon from '../../img/closeIcon.svg'
import {Button} from "../buttons/button/button";
import {useEffect} from "react";

export const DeletePopUp = (props: DeletePopUpPropsType) => {
    const {active, setActive, deleteItem, title} = props

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "auto";
            };
        }
    }, [active])

    const cancelDelete = () => {
        console.log('cancel delete post')
        setActive(false)
    }

    const deleteHandler = () => {
        deleteItem()
    }

    return (
        <div className={active ? `${s.wrapper} ${s.active}` : s.wrapper} onClick={cancelDelete}>
            <div className={active ? `${s.content} ${s.contentActive}` : s.content} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className={s.titleWrapper}>
                    <h3>Delete a {title}</h3>
                    <div onClick={cancelDelete} className={s.imgWrapper}>
                        <img src={closeIcon} alt="close"/>
                    </div>
                </div>
                <p className={s.message}>Are you sure you want to delete this {title}?</p>
                <div className={s.buttonsWrapper}>
                    <Button callback={cancelDelete} title={'No'} color={'#FCFBFB'} background={'#F8346B'}/>
                    <Button callback={deleteHandler} title={'Yes'} color={'#F8346B'} background={'#FCFBFB'}/>
                </div>
            </div>
        </div>

    )
}
/// types
type DeletePopUpPropsType = {
    active: boolean,
    setActive: (value: boolean) => void
    deleteItem: () => void
    title: string
}