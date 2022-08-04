const defaultState = {
    isBurgerActive: false,
}

const reducer = (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case 'SET_BURGER_ACTIVE':
            return {...state, isBurgerActive: payload}
        default:
            return state
    }
}

export default reducer;