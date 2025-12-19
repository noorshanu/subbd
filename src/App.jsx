import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Presalebox from './components/Presalebox'
import Featured from './components/Featured'

function App() {
  return (
    <div className="app-container">
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      
      <div className="main-content">
        <div className="content-grid">
          <Hero />
          <Presalebox />
        </div>
      </div>
      
      <Featured />
    </div>
  )
}

export default App  