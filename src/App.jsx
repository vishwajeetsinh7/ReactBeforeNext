import {Route, Routes} from 'react-router-dom'

import AllMeetupPage from './pages/AllMeetps'
import FavoritePage from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetup'
import Layout from './components/layouts/Layout'
// import Todo from "./componentsx/Todo";

function App() {
  return (
    <Layout>
    <Routes>
      <Route path='/' element={<AllMeetupPage/>} /> 
        

      <Route path='/new' element={<NewMeetupPage/>} />
        
     
      <Route path='/favorite' element={<FavoritePage/>} />
        
    </Routes>
    </Layout>

  );
}

export default App;
