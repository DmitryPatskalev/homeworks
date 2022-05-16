import React from 'react'
import {AffairType, FilterType} from "./HW2";

type AffairsPropsType = {
    title: string
    affairs: AffairType[]
    deleteAffairCallback: (name: number) => void
    onClickHundler: (name: FilterType) => void

}

function Affairs(props: AffairsPropsType) {
    let resultAffair = props.affairs.map((elem, index) => {
        let remove = () => props.deleteAffairCallback(elem.id)
        return <ul key={index}>
            <li>
                <span>{elem.name}--</span>
                <span>{elem.priority}</span>
                <button onClick={remove}>x</button>
            </li>
        </ul>
    })

    const setAll = () => {
        props.onClickHundler('all')
    }
    const setHigh = () => {
        props.onClickHundler('high')
    }
    const setMiddle = () => {
        props.onClickHundler('middle')
    }
    const setLow = () => {
        props.onClickHundler('low')
    }

    return (
      <div>
          <h3>{props.title}</h3>
          {resultAffair}
          <button onClick={setAll}>All</button>
          <button onClick={setHigh}>High</button>
          <button onClick={setMiddle}>Middle</button>
          <button onClick={setLow}>Low</button>
      </div>
    )
}

export default Affairs
