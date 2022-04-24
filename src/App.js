
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Tag from './Tag';
import User from './User';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <User />
        <Feed />
        <Tag />
      </div>
    </div>
  );
}

export default App;
