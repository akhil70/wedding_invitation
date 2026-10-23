import { useNavigate } from 'react-router-dom'
import flowerBg from './assets/vecteezy_beautiful-watercolor-floral-leaves-background_18752533.jpg'
import img from './assets/IMG-20260601-WA0074.jpg'
import './Details.css'

export default function Details() {
  const navigate = useNavigate()

  return (
    <div className="details-page" style={{ backgroundImage: `url(${flowerBg})` }}>
      <button className="close-button" aria-label="Close" onClick={() => navigate('/invitation')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>

      <div className="details-container">
        <div className="photo-frame tilted">
          <img src={img} alt="Wedding photo" />
        </div>
        <span className="name-label">Jackson</span>
      </div>

      <button className="music-button" title="Music">
        ♪
      </button>
    </div>
  )
}
