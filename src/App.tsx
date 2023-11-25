 import Navbar from './Navbar'
 import Hero from './Hero'  
  import Clients from './Clients' 
  import Target from './Target' 
 import Cta from './Cta'  
 import Achievements from './Achievements' 
  import Customers from './Customers' 
 import Footer from './Footer'    
function App() {
  
  return (
    <>
 <Navbar/>
    <main> 
    <Hero/>  
  <Clients/>  
     <Target/> 
     <Cta img='Frame 35.svg' header='The unseen of spending three years at Pixelgrade' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'/> 
      <Achievements/> 
      <Cta img='panel/mobile-login/pana.svg' header='How to design your site footer like we did' description='Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.'/> 
      <Customers/> 
    <Footer/>
     </main>   
   </>
  )
}

export default App
