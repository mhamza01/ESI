import '../styles/globals.css'
import Navi from '../components/Navi'
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
 
 return<>
    <Navi/>
    <Component {...pageProps} />
  </>
  
}

export default MyApp