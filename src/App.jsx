import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Banner from './components/Banner.jsx'
import TicketList from './components/TicketList.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <Navbar />
      <Banner
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
      />
      <TicketList
        setInProgressCount={setInProgressCount}
        setResolvedCount={setResolvedCount}
      />
      <Footer />
      
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
