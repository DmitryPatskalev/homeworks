import React from 'react'
import down from './../../img/Polygon 5.svg'
import up from './../../img/Polygon 2.svg'
import s from './../../HW15.module.css'

// добавить в проект иконки и импортировать


const downIcon = down
const upIcon = up
const noneIcon = '[]'

export type SuperSortPropsType = {
	 id?: string
	 sort: string
	 value: string
	 onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
	 return sort === down
		 ? up
		 : sort === up
			 ? ''
			 : down

	 // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
// исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
	{
		 sort, value, onChange, id = 'hw15',
	}
) => {
	 const up = '0' + value
	 const down = '1' + value

	 const onChangeCallback = () => {
			onChange(pureChange(sort, down, up))
	 }

	 const icon = sort === down
		 ? downIcon
		 : sort === up
			 ? upIcon
			 : noneIcon


	 return (
		 <span className={s.iconContainer} id={id + '-sort-' + value} onClick={onChangeCallback}>
            <img id={id + '-icon-' + sort} src={upIcon} alt={''}/>
            <img id={id + '-icon-' + sort} src={downIcon} alt={''}/>
		 </span>
	 )
}

export default SuperSort
