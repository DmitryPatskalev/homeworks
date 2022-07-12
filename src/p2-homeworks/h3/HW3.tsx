import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    id: string // need to fix any
    title: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (title: string) => { // need to fix any
        let addUser = {
            id: v1(),
            title
        }
        // need to fix
        setUsers([...users, addUser])
    }

    return (
      <div>
          <hr/>
          homeworks 3

          {/*should work (должно работать)*/}
          <GreetingContainer
            users={users}
            addUserCallback={addUserCallback}/>

          <hr/>
          {/*для личного творчества, могу проверить*/}
          {/*<AlternativeGreeting/>*/}
          <hr/>
      </div>
    )
}

export default HW3
