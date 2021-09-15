import React, {useState} from "react";
import { View, Text, StyleSheet } from 'react-native';

import OnBoard from "./src/components/OnBoard"
import Home from "./src/components/Home"

const App = () => {

    const [showOnBoard, setShowOnBoard] = useState(true)

    const handlerOnBoardFinish = () => {
        setShowOnBoard(false)
    }

    return (
        <>
            {showOnBoard && <OnBoard handleDone={handlerOnBoardFinish}/>}
            {!showOnBoard && <Home/>}
        </>
    )
}

export default App