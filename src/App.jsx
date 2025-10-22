import { useState } from 'react'

import Navbar from './components/navbar.jsx'
import Banner from './components/Banner.jsx'
import TicketList from './components/TicketList.jsx'

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
    </>
  )
}

export default App
