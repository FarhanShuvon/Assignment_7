import { useState } from 'react'

import Navbar from './components/navbar.jsx'
import Banner from './components/Banner.jsx'
import TicketList from './components/TicketList.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Banner
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
      />
      <TicketList
        setInProgressCount={setInProgressCount}
        setResolvedCount={setResolvedCount}
      />
      <Footer></Footer>
    </>
  )
}

export default App
