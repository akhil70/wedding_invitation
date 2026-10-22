import React from 'react'
import './OurStory.css'

// Photos in src/assets/Gallery, sorted by filename
const imageModules = import.meta.glob([
  './assets/Gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp}',
  '!./assets/Gallery/{akhil,athira}.*', // used in couple frames, not the grid
], {
  eager: true,
  import: 'default',
})
const images = Object.keys(imageModules).sort().map((key) => imageModules[key])

export default function OurStory({ backgroundImage }) {
  return (
    <div className="our-story" style={{ backgroundImage }}>
      <h2 className="story-title">OUR STORY</h2>
      <div className="story-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="story-photo">
            <img src={img} alt={`Story ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
