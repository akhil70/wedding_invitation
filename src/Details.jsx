import { useNavigate } from 'react-router-dom'
import flowerBg from './assets/vecteezy_beautiful-watercolor-floral-leaves-background_18752533.jpg'
import img from './assets/IMG-20260601-WA0074.jpg'
import './Details.css'

export default function Details() {
  const navigate = useNavigate()

  return (
    <div className="details-page" style={{ backgroundImage: `url(${flowerBg})` }}>
      <button className="close-button" onClick={() => navigate('/invitation')}>
        ✕
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
