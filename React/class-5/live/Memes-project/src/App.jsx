import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import Memes from "./Components/Memes";

function App() {
    return (
        <>
            <h1>React Memes</h1>
            <Memes />
        </>
    );
}

export default App
