import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Playlists from './components/Playlists.js'
import './App.css'
import Navbar from './components/Navbar'
import NewPlaylist from './components/Form/NewPlaylist'

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Playlists} />
					<Route path='/playlists/new' component={NewPlaylist} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
