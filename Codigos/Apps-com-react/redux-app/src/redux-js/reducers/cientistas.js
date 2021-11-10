import { FETCH_CIENTISTAS_ERROR, FETCH_CIENTISTAS_PENDING, FETCH_CIENTISTAS_SUCESS } from '../actions/cientistas'

const initialState = {
    pending: false,
    cientistas: [],
    error: null
}

export function cientistasReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CIENTISTAS_PENDING:
            return{
                ...state,
                pending: true
            }
        case FETCH_CIENTISTAS_SUCESS:
            return{
                ...state,
                pending: false,
                cientistas: [...action.cientistas]
            }
        case FETCH_CIENTISTAS_ERROR:
            return{
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state
    }
}

export const getCientistas = state => state.cientistas.cientistas
export const getCientistasPending = state => state.cientistas.pending
export const getCientistasError = state => state.cientistas.error