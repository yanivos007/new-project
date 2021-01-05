import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import {Provider} from "react-redux";
import appStore from './bussiness/appStore';

function App() {
  return (
        <Provider store={appStore}>
    <div className="App">
      <HomePage />
      <LoginPage />
    </div>
        </Provider>
  );
}

export default App;
