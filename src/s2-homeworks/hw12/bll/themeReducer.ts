const initState = {
	 themeId: 1
}

type InitialStateType = typeof initState

export const themeReducer = (state: InitialStateType = initState, action: ActionsType): InitialStateType => { // fix any
	 switch (action.type) {
		 // дописать
			case "SET_THEME_ID":
				 return {...state, themeId: action.id}

			default:
				 return state
	 }
}
type ActionsType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const)