import reducer from "./reducer";

import { configureStore } from "@reduxjs/toolkit";

export default function configureStrore() {
    let store = configureStore(
        reducer
    )
    return store
}