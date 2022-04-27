import React from "react";
import Message from "./Message";

import avatar from "./dude.png";

const messageData = {
  avatar: <img src={avatar} alt='ava'/>,
  name: "Dmitriy",
  message: "Hello dude!!! How's it going, man? You are really awesome!!!",
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
