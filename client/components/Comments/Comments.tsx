import React, { FC } from 'react'
import styles from '../../styles/comments/comments.module.css'
import Image from 'next/image'
import arrow from '../../icons/header/down.png'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { toggleVisibleComments } from '../../store/slices/content'


const Comments: FC = () => {

    const comments = useAppSelector(({content})=>content.visibleComments)
    const dispatch = useAppDispatch()

    const toggleComments = () =>{
        dispatch(toggleVisibleComments())
    }

    return (
        <div className={`${comments ? styles.comments : styles.hidden}`}>
            <div className={styles.title} onClick={toggleComments}>
                <p>Комментарии</p>
                <Image src={arrow} alt="arrow" width={18} height={18}/>
            </div>
            {comments &&
                <div className={styles.scrollZone}>
                    <div className={styles.comment}>
                        <div className={styles.author}>
                            <div className={styles.avatar}><img src='https://leonardo.osnova.io/2ddabc66-b1c6-5c54-9b69-8c4163c5a7d9/-/scale_crop/108x108/-/format/webp/'/></div>
                            <p className={styles.name}>Vleypi</p>
                            <p className={styles.ago}>20м</p>
                        </div>
                        <div className={styles.commentsText}>
                            "На мой взгляд, лучше поставить 15 целей и достигнуть 70% из них, чем на 100% выполнить тр…
                        </div>
                        <div className={styles.post}>
                            Более 12 лет ставлю цели на год: расска...
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Comments