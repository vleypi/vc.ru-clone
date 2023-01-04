import React, { FC } from 'react'
import Image from 'next/image'
import styles from '../../styles/navigation/navigation.module.css'
import Link from 'next/link'

import flame from '../../icons/navigation/flame.png'
import time from '../../icons/navigation/time.png'
import bookmark from '../../icons/navigation/bookmark.png'
import tape from '../../icons/navigation/tape.png'
import subs from '../../icons/navigation/subs.png'
import { useRouter } from 'next/router'

const Navigation: FC = () => {

    const router = useRouter()

    const links = [
        {image: flame, title: 'Популярное',href: ['/popular','/']},
        {image: time, title: 'Свежее',href: ['/new']},
        {image: bookmark, title: 'Моя лента',href: ['/my']},
        {image: tape, title: 'Закладки',href: ['/bookmarks']},
        {image: subs, title: 'Подписки',href: ['/subs']},
    ]

    const linksList = links.map((link)=>(
        <Link href={link.href[0]} className={`${styles.link} ${link.href.includes(router.asPath) && styles.active}`} >
            <Image src={link.image} alt={link.title} width={22} height={22}/>
            <span>{link.title}</span>
        </Link>
    ))

    return (
        <div className={styles.navigation}>
            {linksList}
        </div>
    )
}

export default Navigation