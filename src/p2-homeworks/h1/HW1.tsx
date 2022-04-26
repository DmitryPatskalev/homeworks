import React from "react";
import Message from "./Message";
import css from "./Message.module.css";
import avatar from "./dude.png";

const messageData = {
  avatar: <img src={avatar} />,
  name: "Dmitriy",
  message: "Hello dude!!! How is't going, man? You are really awesome!!!",
  time: "22:00",
};

function HW1() {
  return (
    <div>
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />

      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
    </div>
  );
}

export default HW1;
