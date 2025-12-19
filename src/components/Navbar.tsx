import React, { useState, useEffect, useRef } from 'react'
import { FaXTwitter, FaTelegram, FaInstagram, FaChevronDown } from 'react-icons/fa6'
import { FaExternalLinkAlt } from 'react-icons/fa'

function Navbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
  const languageSelectorRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }

    if (isLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageOpen])

  const navLinks = [
    'Staking',
    'Influencers',
    'Benefits',
    'How To Buy',
    'Tokenomics',
    'Roadmap',
    'Team',
    'FAQs'
  ]

  const socialLinks = [
    { icon: FaXTwitter, href: '#' },
    { icon: FaTelegram, href: '#' },
    { icon: FaInstagram, href: '#' }
  ]

  return (
    <nav className="navbar-container">
      <div className="navbar-staking-ribbon">
        <span>20% STAKING REWARDS</span>
      </div>
      <div className="navbar-content">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/logo-1.svg" alt="SUBBD" className="logo-image" />
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link} href="#" className="nav-link">
              {link}
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          {/* Social Icons */}
          <div className="social-icons">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  className="social-icon"
                  aria-label={`${social.icon.name} link`}
                >
                  <Icon />
                </a>
              )
            })}
          </div>

          {/* Whitepaper Button */}
          <button className="btn-whitepaper">
            Whitepaper
            <FaExternalLinkAlt className="external-icon" />
          </button>

          {/* Connect Wallet Button */}
          <button className="btn-connect-wallet">
            Connect Wallet
          </button>

          {/* Language Selector */}
          <div className="language-selector" ref={languageSelectorRef}>
            <button
              className="btn-language"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              {selectedLanguage}
              <FaChevronDown className="chevron-icon" />
            </button>
            {isLanguageOpen && (
              <div className="language-dropdown">
                <button
                  className="language-option"
                  onClick={() => {
                    setSelectedLanguage('EN')
                    setIsLanguageOpen(false)
                  }}
                >
                  EN
                </button>
                <button
                  className="language-option"
                  onClick={() => {
                    setSelectedLanguage('ES')
                    setIsLanguageOpen(false)
                  }}
                >
                  ES
                </button>
                <button
                  className="language-option"
                  onClick={() => {
                    setSelectedLanguage('FR')
                    setIsLanguageOpen(false)
                  }}
                >
                  FR
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar