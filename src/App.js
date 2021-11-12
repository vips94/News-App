import Header from './components/Header';
import Layout from './components/Layout';
import Bussiness from './pages/Bussiness';
import Sports from './pages/Sports';
import Tech from './pages/Tech';
import Health from './pages/Health';
import Science from './pages/Science';
import TopHeadlines from './pages/TopHeadlines';
import {Route, BrowserRouter as Router , Routes} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [country,setCountry] = useState('in')
  const handleCountry = (country)=>{
     setCountry(country);
  }
  return (
    <Router>
      <Layout>
        <Header selectedCountry={handleCountry}/>
        <Routes>
          <Route path='/' element={<TopHeadlines country={country}/>}/> 
          <Route path='/sports' element={<Sports country={country}/>}/>
          <Route path='/tech' element={<Tech country={country}/>}/>
          <Route path='/bussiness' element={<Bussiness country={country}/>}/>
          <Route path='/health' element={<Health country={country}/>}/>
          <Route path='/science' element={<Science country={country}/>}/>
        </Routes>
      </Layout>
  </Router>
  );
}

export default App;
