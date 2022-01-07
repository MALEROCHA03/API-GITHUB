
import '@testing-library/jest-dom'


import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer'
import { BrowserRouter } from 'react-router-dom'


function customRender(
    ui,
    {
        initialState,
        store = createStore(rootReducer, initialState),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender }



global.IntersectionObserver = class IntersectionObserver {


    observe() {
        return null;
    }

    disconnect() {
        return null;
    };

    unobserve() {
        return null;
    }
};