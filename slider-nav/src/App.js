import { ContentWrapper, GlobalStyle } from './globalStyles'

import Slider from './components/Slider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<ContentWrapper>
				<Slider />
			</ContentWrapper>
		</Router>
	)
}

export default App
