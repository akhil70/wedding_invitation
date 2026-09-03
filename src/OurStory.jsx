import React from 'react'
import img1 from './assets/IMG-20260601-WA0074.jpg'
import img2 from './assets/IMG-20260601-WA0084.jpg'
import img3 from './assets/IMG-20260601-WA0114.jpg'
import img4 from './assets/IMG-20260601-WA0128.jpg'
import img5 from './assets/IMG-20260601-WA0141.jpg'
import img6 from './assets/IMG-20260601-WA0161.jpg'
import './OurStory.css'

export default function OurStory({ backgroundImage }) {
  const images = [img1, img2, img3, img4, img5, img6]

  return (
    <div className="our-story" style={{ backgroundImage }}>
      <h2 className="story-title">OUR STORY</h2>
      <div className="story-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="story-photo">
            <img src={img} alt={`Story ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
