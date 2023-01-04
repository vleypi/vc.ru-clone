import {FC, useState} from 'react'
import styles from '../../styles/header/header.module.css'
import Image from 'next/image'
import menu from '../../icons/header/menu.png'
import message from '../../icons/header/message.png'
import notification from '../../icons/header/notification.png'
import down from '../../icons/header/down.png'
import plus from '../../icons/header/plus.png'


const Header: FC = () => {

    const [profile,setProfile] = useState<boolean>(false)

    const popup = profile && 
    <div className={styles.popupProfile}>
        <p>Мой профиль</p>
        <div className={styles.popupButtons}>
            <button>Черновики</button>
            <button>Настройки</button>
            <button>Выйти</button>
        </div>
    </div>

    const popupHandler = () =>{
        setProfile(!profile)
    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <button className={styles.menu}><Image width={22} height={30} alt='menu' src={menu} /></button>
                <div className={styles.logoText}>
                    <span>VC</span>
                    <span>.RU</span>
                </div>
            </div>
            <div className={styles.search}>
                <input className={styles.searchInput} placeholder="Поиск"/>
                <button className={styles.createButton}>
                    <Image src={plus} height={12} width={12} alt="plus"/> 
                    <span>Создать</span>
                </button>
            </div>
            <div className={styles.profile}>
                <div className={styles.profileLayout}>
                    <button className={styles.message}><Image width={24} height={24} alt='message' src={message} /></button>
                    <button className={styles.notification}><Image width={24} height={24} alt='notification' src={notification} /></button>
                    <div className={styles.profileAvatar}>
                        <button className={styles.profileButton}><img src='https://leonardo.osnova.io/2ddabc66-b1c6-5c54-9b69-8c4163c5a7d9/-/scale_crop/108x108/-/format/webp/'/></button>
                        <button className={styles.arrowDown} onClick={popupHandler}><Image width={17} height={17} alt='down' src={down} /></button>
                        {popup}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header