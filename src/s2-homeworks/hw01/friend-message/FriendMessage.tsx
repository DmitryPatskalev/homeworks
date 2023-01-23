import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id} className={s.friendMessage}>
            <div className={s.avatar_block}>
                <img className={s.avatar}
                     id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                     src={props.message.user.avatar}
                     alt={'Ava'}
                />
                <div
                    id={'hw1-friend-time-' + props.message.id}
                    className={s.friendTime}
                >
                    {/*создаёт студент*/}

                    {props.message.message.time}
                </div>
            </div>
            <div className={s.friendImageAndText}>

                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}

                        {props.message.user.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}

                        {props.message.message.text}
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default FriendMessage
