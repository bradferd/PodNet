import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Playlists from './components/Playlists.js'
import './App.css'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Playlists} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
