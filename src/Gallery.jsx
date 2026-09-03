import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import flowerBg from './assets/vecteezy_beautiful-watercolor-floral-leaves-background_18752533.jpg'
import img1 from './assets/IMG-20260601-WA0074.jpg'
import img2 from './assets/IMG-20260601-WA0066.jpg'
import audioFile from './assets/my-love-westlife.mp3'
import CeremonyInfo from './CeremonyInfo'
import CoupleNames from './CoupleNames'
import WeddingDetails from './WeddingDetails'
import Calendar from './Calendar'
import OurStory from './OurStory'
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
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
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

  useEffect(() => {
    if (!isAutoScrolling) return

    let animationId
    const scrollSpeed = 0.5

    const scroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (window.scrollY < maxScroll) {
        window.scrollBy(0, scrollSpeed)
        animationId = requestAnimationFrame(scroll)
      } else {
        setIsAutoScrolling(false)
      }
    }

    animationId = requestAnimationFrame(scroll)

    const handleUserInteraction = () => {
      setIsAutoScrolling(false)
    }

    window.addEventListener('wheel', handleUserInteraction)
    window.addEventListener('touchmove', handleUserInteraction)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('wheel', handleUserInteraction)
      window.removeEventListener('touchmove', handleUserInteraction)
    }
  }, [isAutoScrolling])

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
      <button className="close-button" onClick={() => navigate('/invitation')}>
        ✕
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

      {/* Eighth Component - Reception Venue */}
      <ReceptionVenue />

      {/* Ninth Component - Presence */}
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
