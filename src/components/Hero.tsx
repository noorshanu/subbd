import React from 'react'
import { FaCheck } from 'react-icons/fa6'

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-background">
        <img src="/banner-bg.webp" alt="Background" className="hero-bg-image" />
      </div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-headline">
            <span className="hero-token">$SUBBD</span> TOKEN. THE NO.1 AI AGENT CREATOR PLATFORM.
          </h1>
          
          <p className="hero-description">
            $SUBBD token powers the next generation of content creators. Powered by AI, the SUBBD platform revolutionizes creator-fan relationships.
          </p>
          
          <div className="hero-metrics">
            <div className="metric-item">
              <FaCheck className="check-icon" />
              <span>2000+ Top Earning Creators</span>
            </div>
            <div className="metric-item">
              <FaCheck className="check-icon" />
              <span>250m+ Combined Followers</span>
            </div>
          </div>
        </div>
        
        <div className="hero-coin">
          <img src="/banner-coin.webp" alt="SUBBD Coin" className="coin-image" />
        </div>
      </div>
    </div>
  )
}

export default Hero


