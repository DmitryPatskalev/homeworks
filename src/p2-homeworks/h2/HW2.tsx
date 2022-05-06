import React, {useState} from 'react'
import Affairs from './Affairs'

export type AffairType = {
    id: number
    name: string
    priority: string
}

export type FilterType = 'all' | 'high' | 'middle' | 'low'

const defaultAffairs: Array<AffairType> = [
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
]

function HW2() {
    const [affairs, setAffairs] = useState(defaultAffairs)
    const [filter, setFilter] = useState('all')

    const deleteAffairCallback = (id: number) => {
        let buttonRemove = affairs.filter(elem => elem.id !== id)
        setAffairs(buttonRemove)
    }
    let filteredAffairs = affairs
    if (filter === 'high') {
        filteredAffairs = affairs.filter(elem => elem.priority === 'high')
    }
    if (filter === 'middle') {
        filteredAffairs = affairs.filter(elem => elem.priority === 'middle')
    }
    if (filter === 'low') {
        filteredAffairs = affairs.filter(elem => elem.priority === 'low')
    }
    let onClickHundler = (name: string) => {
        setFilter(name)
    }

    return (
      <div>
          <Affairs
            title='My Affairs'
            affairs={filteredAffairs}
            deleteAffairCallback={deleteAffairCallback}
            onClickHundler={onClickHundler}

          />
      </div>
    )
}

export default HW2

//
// // pure helper functions
// export const filterAffairs = (affairs: string, filter: FilterType) => { // need to fix any
//     if (filter === 'all') return affairs
//     else return // need to fix
// }
// export const deleteAffair = (affairs: AffairType, id: number) => { // need to fix any
//     return // need to fix
// }