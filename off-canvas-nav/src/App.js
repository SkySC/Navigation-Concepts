import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OffCanvas from './components/OffCanvas'

import Projects from './pages/Projects'
import Favourites from './pages/Favourites'
import Ideas from './pages/Ideas'
import Settings from './pages/Settings'
import Sandbox from './pages/Sandbox'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import SignIn from './pages/SignIn'

import { GlobalStyle } from './globalStyles'
import { useState } from 'react'
import styled from 'styled-components'

const App = () => {
	const [canvasVisible, setCanvasVisible] = useState(false)
	const toggleCanvas = () => setCanvasVisible(!canvasVisible)

	return (
		<Router>
			<GlobalStyle />
			<OffCanvas handle={toggleCanvas} visible={canvasVisible} />
			<Switch>
				<Route
					path='/projects'
					exact
					render={(props) => (
						<Projects {...props} shifted={canvasVisible} />
					)}
				/>
				<Route
					path='/favs'
					exact
					render={(props) => (
						<Favourites {...props} shifted={canvasVisible} />
					)}
				/>
				<Route
					path='/ideas'
					exact
					render={(props) => (
						<Ideas {...props} shifted={canvasVisible} />
					)}
				/>
				<Route
					path='/settings'
					exact
					render={(props) => (
						<Settings {...props} shifted={canvasVisible} />
					)}
				/>
				<Route
					path='/sandbox'
					exact
					render={(props) => (
						<Sandbox {...props} shifted={canvasVisible} />
					)}
				/>
				<Route
					path='/portfolio'
					exact
					render={(props) => (
						<Portfolio {...props} shifted={canvasVisible} />
					)}
				/>
				<Route
					path='/about'
					exact
					render={(props) => (
						<About {...props} shifted={canvasVisible} />
					)}
				/>
				<Route
					path='/sign-in'
					exact
					render={(props) => (
						<SignIn {...props} shifted={canvasVisible} />
					)}
				/>
			</Switch>
		</Router>
	)
}

export default App
