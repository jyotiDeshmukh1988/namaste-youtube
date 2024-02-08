import './App.css';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  return (
    <div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
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
  );
}

export default App;
