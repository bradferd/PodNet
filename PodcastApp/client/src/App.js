import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld.js'
import './App.css'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={HelloWorld} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
