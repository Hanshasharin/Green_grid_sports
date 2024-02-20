
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Routing from './Components/Routing';
import Loader from './Components/Common/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
// import { errorToast, successToast } from './Plugins/Toast/Toast';

function App() {
  // successToast('hi hello')
  // errorToast('error')
  return (

  <>
  <ToastContainer/>
  {/* <Loader/> */}
  <Routing/>
  </>
  );
}

export default App;
