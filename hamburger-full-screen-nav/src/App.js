import Menu from './components/Menu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import About from './pages/About'
import Chat from './pages/Chat'
import News from './pages/News'
import Shop from './pages/Shop'

import { GlobalStyle, GlobalNavbar } from './globalStyles'

import { useState, useEffect } from 'react'

const App = () => {
	const [showNavbar, setShowNavbar] = useState(true)

	const showNavbarOnScroll = () => {
		if (window.scrollY > 0) setShowNavbar(false)
		else setShowNavbar(true)
	}

	useEffect(() => {
		window.addEventListener('scroll', showNavbarOnScroll)
		return () => {
			window.removeEventListener('scroll', showNavbarOnScroll)
		}
	}, [])

	return (
		<Router>
			<GlobalStyle />
			<GlobalNavbar showNavbar={showNavbar} />
			<Menu showNavbar={showNavbar} />
			<Switch>
				<Route path='/news' exact component={News} />
				<Route path='/chat' exact component={Chat} />
				<Route path='/shop' exact component={Shop} />
				<Route path='/about' exact component={About} />
			</Switch>
		</Router>
	)
}

export default App
