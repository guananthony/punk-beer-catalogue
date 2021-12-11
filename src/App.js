import './App.css';
import Home from './routes/Home';
import BeerPage from './routes/BeerPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<App />} />
				<Route index element={<Home />} />
				<Route path='/BeerPage/:id' element={<BeerPage />} />
			</Routes>
		</Router>
	);
}

export default App;
