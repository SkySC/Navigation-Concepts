import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import News from './pages/News'
import Community from './pages/Community'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Shop from './pages/Shop'
import Chat from './pages/Chat'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

import { GlobalStyle } from './globalStyles'

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Sidebar />
			<Switch>
				<Route path='/news' exact component={News} />
				<Route path='/community' exact component={Community} />
				<Route path='/shop' exact component={Shop} />
				<Route path='/support/chat' exact component={Chat} />
				<Route path='/support/contact' exact component={Contact} />
				<Route path='/support/FAQ' exact component={FAQ} />
				<Route path='/about' exact component={About} />
				<Route path='/sign-in' exact component={SignIn} />
			</Switch>
		</Router>
	)
}

export default App
