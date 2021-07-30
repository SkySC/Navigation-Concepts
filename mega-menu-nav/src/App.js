import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopNav from './components/TopNav'

import Desc1 from './pages/Desc1'
import Desc2 from './pages/Desc2'
import Desc3 from './pages/Desc3'
import Desc4 from './pages/Desc4'
import Settings from './pages/Settings'
import Sandbox from './pages/Sandbox'

import { GlobalStyle } from './globalStyles'

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<TopNav />
			<Switch>
				<Route path='/desc1' exact component={Desc1} />
				<Route path='/desc2' exact component={Desc2} />
				<Route path='/desc3' exact component={Desc3} />
				<Route path='/desc4' exact component={Desc4} />
				<Route path='/sandbox' exact component={Sandbox} />
				<Route path='/settings' exact component={Settings} />
			</Switch>
		</Router>
	)
}

export default App
