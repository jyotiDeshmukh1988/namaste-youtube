import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div>
    <Header/>
    <Body/>
    {/** 
     * Header
     * Body
     *  Sidebar
     *    Menu content
     *  Main Container
     *    Button List
     *    Video Container
     *      VideoCard
     * **/}
    </div>
    </Provider>
  );
}

export default App;
