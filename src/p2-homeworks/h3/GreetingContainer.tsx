import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer = (props: GreetingContainerPropsType) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError(null)
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        if (name.trim() !== '') {
            alert(`Hello ${name}! `) // need to fix
        } else {
            setError('Please, enter the data')
        }
        setName('')
    }
    const onPressKeyHundler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            addUser()
        }
    }
    
    const totalUsers = 0


    // need to fix


    return (
      <Greeting
        name={name}
        setNameCallback={setNameCallback}
        addUser={addUser}
        error={error}
        totalUsers={totalUsers}
        onPressKeyHundler={onPressKeyHundler}
      />
    )
}

export default GreetingContainer
