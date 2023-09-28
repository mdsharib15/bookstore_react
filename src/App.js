import './App.css';
import Banner from './Components/Banner';
import BodyContent from './Components/BodyContent';
import Header from './Components/header';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (

    <>
     <Provider store={store}>
      <Header />
      <Banner />
      <BodyContent />
      </Provider>
    </>
  );
}

export default App;
