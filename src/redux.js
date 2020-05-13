import { createStore } from 'redux';

const initialState = {
    headerColor: 'white',
    footerColor: 'white',
    headerBack: false,
    footerBack: false,
    data: {}
}

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)

function reducer(state, action) {
    switch (action.type) {
        case 'HEADER_COLOR_CHANGE':
            return {
                ...state,
                headerColor: action.color
            }

        case 'FOOTER_COLOR_CHANGE':
            return {
                ...state,
                footerColor: action.color
            }

        case 'DATA_CHANGE':
            return {
                ...state,
                data: action.data
            }

        case 'HEADER_BACK_CHANGE':
            return {
                ...state,
                headerBack: action.headerBack
            }

        case 'FOOTER_BACK_CHANGE':
            return {
                ...state,
                footerBack: action.footerBack
            }

        default:
            return state;
    }
}