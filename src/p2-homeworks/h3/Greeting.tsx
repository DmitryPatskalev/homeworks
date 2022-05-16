import React, {ChangeEvent, KeyboardEvent, MouseEvent} from 'react'
import css from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (event: MouseEvent<HTMLButtonElement>) => void// need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    onPressKeyHundler: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers, onPressKeyHundler} // деструктуризация пропсов
) => {
    const inputClass = css.error // need to fix with (?:)

    return (
      <div>
          <input onKeyPress={onPressKeyHundler} value={name} onChange={setNameCallback} className={inputClass}/>
          <button onClick={addUser}>add</button>
          <span>{totalUsers}</span>
          {error && <div className={css.errorMessage}>{error}</div>}
      </div>
    )
}

export default Greeting
