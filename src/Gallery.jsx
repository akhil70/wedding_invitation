import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import flowerBg from './assets/vecteezy_beautiful-watercolor-floral-leaves-background_18752533.jpg'
import img1 from './assets/Gallery/akhil.jpg'
import img2 from './assets/Gallery/athira.jpg'
import audioFile from './assets/my-love-westlife.mp3'
import CeremonyInfo from './CeremonyInfo'
import CoupleNames from './CoupleNames'
import WeddingDetails from './WeddingDetails'
import Calendar from './Calendar'
import OurStory from './OurStory'
import WeddingVenue from './WeddingVenue'
import ReceptionVenue from './ReceptionVenue'
import Presence from './Presence'
import './Gallery.css'
import './CeremonyInfo.css'
import './CoupleNames.css'
import './WeddingDetails.css'
import './Calendar.css'
import './OurStory.css'
import './ReceptionVenue.css'
import './Presence.css'

export default function Gallery() {
  const navigate = useNavigate()
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(err => {
          console.log('Autoplay blocked, waiting for user interaction')
          const playAudio = () => {
            if (audioRef.current) {
              audioRef.current.play()
              setIsPlaying(true)
            }
          }
          window.addEventListener('click', playAudio, { once: true })
          return () => window.removeEventListener('click', playAudio)
        })
    }
  }, [])

  // Auto-scroll: pauses while the user touches/scrolls, resumes shortly after
  useEffect(() => {
    const scrollSpeed = 1.5
    const resumeDelay = 1500 // ms after the user lets go
    let animationId
    let isTouching = false
    let resumeAt = 0

    const scroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const paused = isTouching || performance.now() < resumeAt
      if (!paused && window.scrollY < maxScroll) {
        window.scrollBy(0, scrollSpeed)
      }
      animationId = requestAnimationFrame(scroll)
    }

    const pauseThenResume = () => {
      resumeAt = performance.now() + resumeDelay
    }
    const onTouchStart = () => {
      isTouching = true
    }
    const onTouchEnd = () => {
      isTouching = false
      pauseThenResume() // gives momentum scrolling time to finish
    }
    const onKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
        pauseThenResume()
      }
    }

    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('touchcancel', onTouchEnd, { passive: true })
    window.addEventListener('wheel', pauseThenResume, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('touchcancel', onTouchEnd)
      window.removeEventListener('wheel', pauseThenResume)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="gallery">
      <audio
        ref={audioRef}
        autoPlay
        loop
        style={{ display: 'none' }}
      >
        <source src={audioFile} type="audio/mpeg" />
      </audio>
      <button className="close-button" aria-label="Close" onClick={() => navigate('/')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>

      {/* First Component - Akhil */}
      <div className="gallery-section" style={{ backgroundImage: `url(${flowerBg})` }}>
        <div className="details-container">
          <div className="photo-frame tilted-left">
            <img src={img1} alt="Wedding photo - Akhil" />
          </div>
          <span className="name-label">Akhil</span>
        </div>
      </div>

      {/* Second Component - Athira */}
      <div className="gallery-section" style={{ backgroundImage: `url(${flowerBg})` }}>
        <div className="details-container mirror">
          <span className="name-label">Athira</span>
          <div className="photo-frame tilted-right">
            <img src={img2} alt="Wedding photo - Athira" />
          </div>
        </div>
      </div>

      {/* Third Component - Wedding Details */}
      <WeddingDetails backgroundImage={`url(${flowerBg})`} />

      {/* Fourth Component - Ceremony Info */}
      <CeremonyInfo backgroundImage={`url(${flowerBg})`} />

      {/* Fifth Component - Couple Names */}
      <CoupleNames backgroundImage={`url(${flowerBg})`} />

      {/* Sixth Component - Calendar */}
      <Calendar backgroundImage={`url(${flowerBg})`} />

      {/* Seventh Component - Our Story */}
      <OurStory backgroundImage={`url(${flowerBg})`} />

      {/* Eighth Component - Wedding Venue */}
      <WeddingVenue />

      {/* Ninth Component - Reception Venue */}
      <ReceptionVenue />

      {/* Tenth Component - Presence */}
      <Presence backgroundImage={`url(${flowerBg})`} />

      <button
        className="music-button"
        title={isPlaying ? "Pause Music" : "Play Music"}
        onClick={toggleAudio}
      >
        {isPlaying ? '♪' : '⏸'}
      </button>
    </div>
  )
}
