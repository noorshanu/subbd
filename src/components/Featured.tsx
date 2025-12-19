import React from 'react'
import Marquee from 'react-fast-marquee'

function Featured() {
  const featuredLogos = [
    '/featured/download.png',
    '/featured/download-1.png',
    '/featured/download-2.png',
    '/featured/download-3.png',
    '/featured/download-4.png',
    '/featured/download-5.png'
  ]

  return (
    <div className="featured-section">
      <div className="featured-content">
        <p className="featured-title">As Featured In</p>
        <Marquee
          speed={50}
          gradient={true}
          gradientColor="#000"
          gradientWidth={100}
          pauseOnHover={false}
        >
          {featuredLogos.map((logo, index) => (
            <div key={index} className="featured-logo-wrapper">
              <img
                src={logo}
                alt={`Featured ${index + 1}`}
                className="featured-logo"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Featured

