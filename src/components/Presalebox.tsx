import React, { useState, useEffect } from 'react'

function Presalebox() {
  const [days, setDays] = useState(1)
  const [hours, setHours] = useState(13)
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(28)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) return prev - 1
        setMinutes((prev) => {
          if (prev > 0) return prev - 1
          setHours((prev) => {
            if (prev > 0) return prev - 1
            setDays((prev) => (prev > 0 ? prev - 1 : 0))
            return 23
          })
          return 59
        })
        return 59
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const raised = 1396408.23
  const target = 1509985
  const progress = (raised / target) * 100

  return (
    <div className="presale-box">
      <div className="staking-ribbon">
        <span>20% STAKING REWARDS</span>
      </div>
      
      <div className="presale-content">
        <h2 className="presale-title">SUBBD. Buy $SUBBD Token Presale!</h2>
        
        <div className="countdown-timer">
          <div className="countdown-item">
            <div className="countdown-value">{String(days).padStart(2, '0')}</div>
            <div className="countdown-label">DAYS</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-value">{String(hours).padStart(2, '0')}</div>
            <div className="countdown-label">HOURS</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-value">{String(minutes).padStart(2, '0')}</div>
            <div className="countdown-label">MINUTES</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-value">{String(seconds).padStart(2, '0')}</div>
            <div className="countdown-label">SECONDS</div>
          </div>
        </div>
        
        <div className="usd-raised">
          <div className="usd-raised-header">
            <span>USD RAISED: ${raised.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / ${target.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        
        <div className="price-increase">
          <button className="price-increase-btn">Until Price Increase</button>
        </div>
        
        <div className="token-price">
          <span>1 $SUBBD = $0.057225</span>
        </div>
        
        <div className="buy-buttons">
          <button className="buy-btn buy-card">BUY WITH CARD</button>
          <button className="buy-btn buy-crypto">BUY WITH CRYPTO</button>
        </div>
        
        <div className="wallet-link">
          <a href="#">Don't have a wallet?</a>
        </div>
        
        <div className="payment-provider">
          <span>Powered by Web3Payments</span>
        </div>
      </div>
    </div>
  )
}

export default Presalebox


