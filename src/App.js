import Header from './components/Header';
import Layout from './components/Layout';
import Bussiness from './pages/Bussiness';
import LatestNews from './pages/LatestNews';
import Tech from './pages/Tech';
import Trending from './pages/Trending';
import {Route, BrowserRouter as Router , Routes} from 'react-router-dom';

function App() {
//   fetch("https://google-news.p.rapidapi.com/v1/top_headlines?lang=en&country=US", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "google-news.p.rapidapi.com",
// 		"x-rapidapi-key": "9a13b3b15dmshe9d2ce71484db58p11b8e4jsn314383fbf5c9"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
  return (
    <Router>
      <Layout>
        <Header/>
        <Routes>
          <Route path='/' element={<LatestNews/>}/>
          <Route path='/tech' element={<Tech/>}/>
          <Route path='/bussiness' element={<Bussiness/>}/>
          <Route path='/trending' element={<Trending/>}/>
        </Routes>
      </Layout>
  </Router>
  );
}

export default App;
