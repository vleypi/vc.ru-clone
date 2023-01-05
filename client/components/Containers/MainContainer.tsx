import Head from 'next/head';
import {FC, ReactNode} from 'react'
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import styles from '../../styles/container/container.module.css'
import Comments from '../Comments/Comments';

interface MainContainerProps {
    children: ReactNode;
    title: string;
}

const MainContainer: FC<MainContainerProps> = ({title,children}) => {



    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.flex}>
                    <Navigation />
                    <div className={styles.content}>
                        {children}
                    </div>
                    <Comments />
                </div>
            </div>
        </>
    )
}

export default MainContainer