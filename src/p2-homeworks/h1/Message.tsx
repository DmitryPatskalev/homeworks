import React from "react";
import s from "./Message.module.css";

type MessageType = {
  avatar: any;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessageType) {
  return (
    <div className={s.body}>
      <span className={s.ava}>{props.avatar}</span>
      <div className={s.block}>
        <div className={s.name}>{props.name}</div>
        <div className={s.message}> {props.message}</div>
        <div className={s.time}> {props.time}</div>
      </div>
    </div>
  );
}

export default Message;
