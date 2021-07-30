import { GlobalStyle } from './globalStyles'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import MainContent from './pages/MainContent'
import Bitcoin from './pages/Bitcoin'
import Buffer from './pages/Buffer'
import Codepen from './pages/Codepen'
import Ethereum from './pages/Ethereum'
import Gg from './pages/Gg'
import Meetup from './pages/Meetup'

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<MainContent />
			<Switch>
				<Route path='/bitcoin' exact component={Bitcoin} />
				<Route path='/buffer' exact component={Buffer} />
				<Route path='/codepen' exact component={Codepen} />
				<Route path='/ethereum' exact component={Ethereum} />
				<Route path='/gg' exact component={Gg} />
				<Route path='/meetup' exact component={Meetup} />
			</Switch>
		</Router>
	)
}

export default App
