import {FC,useRef,useState,useEffect} from 'react'
import styles from '../../../../styles/content/writing/writing.module.css'

import EditorJS from '@editorjs/editorjs'
import ImageTool from '@editorjs/image';
import HeaderTool from '@editorjs/header';
import TableTool from '@editorjs/table'
import ListTool from '@editorjs/list'
import InlineCodeTool from '@editorjs/inline-code'
import ReactTextareaAutosize from 'react-textarea-autosize'




const Editor: FC = () => {

    const editor = useRef<EditorJS>()

    
    const [header,setHeader] = useState()

    const [blocks,setBlocks] = useState([])

    const onChange = async () => {

      const output = await editor.current.save()

      setBlocks(output.blocks)
    };

    
    const textareaSaver = (e) => {
        setHeader(e.target.value)
    }

    useEffect(()=>{
        editor.current = new EditorJS({
            placeholder: 'Нажмите Tab чтобы выбрать инстурмент',
            tools: {
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: `http://localhost:5001/api/blog/uploadImg`,
                        }
                    }
                },
                table: TableTool,
                list: ListTool,
                inlineCode: InlineCodeTool,
                header: HeaderTool
            },
            i18n: {
                /**
                 * @type {I18nDictionary}
                 */
                messages: {
                  ui: {
                    "blockTunes": {
                      "toggler": {
                        "Click to tune": "Нажмите, чтобы настроить",
                        "or drag to move": "или перетащите"
                      },
                    },
                    "inlineToolbar": {
                      "converter": {
                        "Convert to": "Конвертировать в"
                      }
                    },
                    "toolbar": {
                      "toolbox": {
                        "Add": "Добавить"
                      }
                    }
                  },
              
                  /**
                   * Section for translation Tool Names: both block and inline tools
                   */
                  toolNames: {
                    "Text": "Параграф",
                    "Image": "Картинка",
                    "Heading": "Заголовок",
                    "List": "Список",
                    "Warning": "Примечание",
                    "Checklist": "Чеклист",
                    "Quote": "Цитата",
                    "Code": "Код",
                    "Delimiter": "Разделитель",
                    "Raw HTML": "HTML-фрагмент",
                    "Table": "Таблица",
                    "Link": "Ссылка",
                    "Marker": "Маркер",
                    "Bold": "Полужирный",
                    "Italic": "Курсив",
                    "InlineCode": "Моноширинный",
                  },
              
    
                  tools: {
                    "warning": { 
                      "Title": "Название",
                      "Message": "Сообщение",
                    },
    
                    "link": {
                      "Add a link": "Вставьте ссылку"
                    },
                    "stub": {
                      'The block can not be displayed correctly.': 'Блок не может быть отображен'
                    }
                  },
                }
              },
        })
    })
    return (
        <div className={styles.editor}>
            <div className={styles.editorContainer}>
                <ReactTextareaAutosize 
                    className={styles.title}
                    placeholder="Заголовок"
                    maxLength={120}
                    // onChange={textareaSaver}
                    autoFocus
                />
                <div id='editorjs' className={styles.editorjs}></div>
            </div>
        </div>
    )
}

export default Editor