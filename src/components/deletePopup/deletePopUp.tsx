import s from './DeletePopup.module.css'
import closeIcon from '../../img/closeIcon.svg'
import {Button} from "../buttons/button/button";

export const DeletePopUp = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.titleWrapper}>
                <h3>Delete a blog</h3>
                <div className={s.imgWrapper}>
                    <img src={closeIcon} alt="close"/>
                </div>
            </div>
            <p className={s.message}>Are you sure you want to delete this blog?</p>
            <div className={s.buttonsWrapper}>
                <Button callback={()=>{}} title={'No'} color={'#FCFBFB'} background={'#F8346B'}/>
                <Button callback={()=>{}} title={'Yes'} color={'#F8346B'} background={'#FCFBFB'}/>
            </div>
        </div>
    )
}
