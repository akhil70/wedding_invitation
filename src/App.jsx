import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import leafBg from './assets/vecteezy_hand-painted-watercolour-background-with-leaf-design_26127302.jpg'

export default function App() {
  const [guestName] = useState('Marco')
  const navigate = useNavigate()

  
  return (
    <div className="app" style={{ backgroundImage: `url(${leafBg})` }}>
      <div className="invitation-card">
        <div className="card-content">
          <div className="heart-icon">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="28" fill="#2d5a3d"/>
              <path d="M 30 50 C 20 40 15 32 15 26 C 15 20 20 15 24 15 C 27 15 30 18 30 18 C 30 18 33 15 36 15 C 40 15 45 20 45 26 C 45 32 40 40 30 50 Z" fill="white"/>
            </svg>
          </div>

          <h1 className="groom-name">Akhil</h1>
          <p className="ampersand">&</p>
          <h1 className="bride-name">Athira</h1>

          <div className="divider">— 💚 —</div>

          <p className="date">November 14, 2026</p>

          <p className="you-are-invited">You're Invited</p>

         

          <p className="to-join-us">to join us on our wedding day</p>

          <button className="open-button" onClick={() => navigate('/')}>
            Open Invitation
          </button>
        </div>

      </div>
    </div>
  )
}
