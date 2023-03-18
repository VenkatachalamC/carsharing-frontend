
import SignIn from './components/signin';
import Home from './components/home';
import BookCar from './components/bookcar';
import ShareCar from './components/sharecar';
import SignUp from './components/signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './styles/background.css';
import Notifications from './components/notifications';

function App() {
  return (
    <div className='background'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Book" element={<BookCar/>}/>
      <Route path="/Share" element={<ShareCar/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path='/notifications' element={<Notifications/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
