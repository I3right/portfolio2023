import Navbar from './component/Navbar'
import Banner from './component/Banner'
import MyQuote from './component/MyQuote'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Certificates from './component/Certificates'
import Aboutme from './component/Aboutme'
import './CSS/App.css'


function App() {

  return (
    <div className='container-xxl'>
      <Navbar/>
      <Banner/>
      {/* <MyQuote/> */}
      <Skills/>
      <Projects/>
      <Certificates/>
      <Aboutme/>
    </div>
  )
}

export default App
