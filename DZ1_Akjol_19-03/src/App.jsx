import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function List(props) {
    return (
        <>
            <li>{props.text}</li>
        </>
    );
}

function Text() {
    return (
        <>
            <h2>Akjol & Travis</h2>
        </>
    );
}

function App() {
  return (
    <div className="App">
        <h1>Wassup World</h1>
        <Text/>
        <ul>
            <List text="React"/>
            <List text="React1"/>
            <List text="React2"/>
            <List text="React3"/>
        </ul>
    </div>
  )
}

export default App