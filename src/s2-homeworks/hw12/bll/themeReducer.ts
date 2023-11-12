const initState: initialStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsType): initialStateType => { // fix any
    switch (action.type) {

        case "SET_THEME_ID": {
            console.log(action)
            return { ...state, themeId: action.id }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
export type ActionsType = ReturnType<typeof changeThemeId>

export type initialStateType = {
    themeId: number
}