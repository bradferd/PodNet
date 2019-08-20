import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Playlists from './components/Playlist/Playlists'
import './App.css'
import Navbar from './components/Navbar'
import NewPlaylist from './components/Form/NewPlaylist'
import EditPlaylist from './components/Form/EditPlaylist'
import PlaylistDash from './components/Playlist/PlaylistDash'
import DeletePlaylist from './components/Playlist/DeletePlaylist'
import DeletePodcast from './components/Podcast/DeletePodcast'
import ShowComment from './components/Comments/ShowComment'
import EditComment from './components/Form/EditComment'
import DeleteComment from './components/Comments/DeleteComment'
import Landing from './components/Landing'

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route
						path='/playlists/:playlistId/podcast/:podcastId/comments'
						component={ShowComment}
					/>
					<Route exact path='/playlists' component={Playlists} />
					<Route path='/playlists/new' component={NewPlaylist} />
					<Route exact path='/' component={Landing} />
					<Route
						path='/playlists/:playlistId/podcast/:podcastId/comments/:commentId/edit'
						component={EditComment}
					/>
					<Route
						path='/playlists/:playlistId/delete'
						component={DeletePlaylist}
					/>
					<Route path='/playlists/:playlistId/edit' component={EditPlaylist} />
					<Route
						path='/playlists/:playlistId/podcast/:podcastId/delete'
						component={DeletePodcast}
					/>
					<Route path='/playlists/:playlistId' component={PlaylistDash} />
					<Route
						path='/playlists/:playlistId/podcast/:podcastId/comments/:commentId/delete'
						component={DeleteComment}
					/>
				</Switch>
			</Router>
		</div>
	)
}

export default App
