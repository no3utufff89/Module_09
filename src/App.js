import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {store} from './store';
import {PostsContextProvider} from './context/postsContext';

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <PostsContextProvider>
          <Header/>
          <Main/>
        </PostsContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
