import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    // Test start
    window.getState = store.getState;
    window.dispatch = store.dispatch
    // Test end
    
    ReactDOM.render(<Root store={store} />, root)
})