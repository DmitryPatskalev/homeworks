import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios, {AxiosError} from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос +++
* 3 - сделать стили в соответствии с дизайном +++
* */


const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')

    const disabled = info === '...loading'
    const colorButtonDisabled = disabled ? 'disabled' : 'secondary'

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test'

        setCode('')
        setText('')
        setInfo('...loading')
        setImage('')

        axios
            .post(url, {success: x})
            .then((res) => {
                switch (x) {
                    case true:
                        setCode('Код 200!')
                        setText(res.data.errorText)
                        setInfo(res.data.info)
                        setImage(success200)
                        break;

                    default:
                        return x
                }
            })
            .catch((e: any) => {
                switch (x) {
                    case false :
                        setCode('Ошибка 400!')
                        setText(e.response.data?.errorText)
                        setInfo(e.response.data?.info)
                        setImage(error400)
                        break;

                    case undefined:
                        setCode('Ошибка 500!')
                        setText(e.response.data?.errorText)
                        setInfo(e.response.data?.info)
                        setImage(error500)
                        break;

                    case null:
                        setCode('Error!')
                        setText(e.response.data?.errorText)
                        setInfo(e.response.data?.info)
                        setImage(errorUnknown)
                        break;
                    default:
                        return x
                }
                setInfo('')
                // дописать
            })
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={colorButtonDisabled}
                        disabled={disabled}
                        // дописать
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={colorButtonDisabled}
                        disabled={disabled}
                        // дописать
                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={colorButtonDisabled}
                        disabled={disabled}
                        // дописать
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={colorButtonDisabled}
                        disabled={disabled}
                        // дописать
                    >
                        Send null
                    </SuperButton>
                </div>
                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>
                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
