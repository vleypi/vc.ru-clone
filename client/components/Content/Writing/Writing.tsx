import React, { FC, useEffect } from 'react'
import styles from '../../../styles/content/writing/writing.module.css'
import dynamic from "next/dynamic";



const Writing: FC = () => {

    const Editor = dynamic( ()=> {
        return import('./Editor/Editor');
      }, { ssr: false } );
    

    return (
        <div className={styles.writing}>
           {Editor && <Editor />}
        </div>
    )
}

export default Writing