import { useNavigate } from 'react-router-dom'
import flowerBg from './assets/vecteezy_beautiful-watercolor-floral-leaves-background_18752533.jpg'
import img from './assets/IMG-20260601-WA0066.jpg'
import './Details2.css'

export default function Details2() {
  const navigate = useNavigate()

  return (
    <div className="details-page" style={{ backgroundImage: `url(${flowerBg})` }}>
      <button className="close-button" onClick={() => navigate('/invitation')}>
        ✕
      </button>

      <div className="details-container">
        <span className="name-label">Athira</span>
        <div className="photo-frame tilted">
          <img src={img} alt="Wedding photo" />
        </div>
      </div>

      <button className="music-button" title="Music">
        ♪
      </button>
    </div>
  )
}
