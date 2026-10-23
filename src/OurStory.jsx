import React, { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
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

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

function Lightbox({ index, onClose, onPrev, onNext }) {
  const touchStartX = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)

    // Lock page scroll while open
    const html = document.documentElement
    const prevHtml = html.style.overflow
    const prevBody = document.body.style.overflow
    html.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      html.style.overflow = prevHtml
      document.body.style.overflow = prevBody
    }
  }, [onClose, onPrev, onNext])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) (dx > 0 ? onPrev : onNext)()
    touchStartX.current = null
  }

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${images.length}`}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        className="lightbox-btn lightbox-close"
        aria-label="Close"
        onClick={(e) => { e.stopPropagation(); onClose() }}
      >
        <Icon d="M6 6l12 12M18 6L6 18" />
      </button>

      <button
        className="lightbox-btn lightbox-prev"
        aria-label="Previous photo"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
      >
        <Icon d="M15 5l-7 7 7 7" />
      </button>

      <img
        key={index}
        className="lightbox-img"
        src={images[index]}
        alt={`Story ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="lightbox-btn lightbox-next"
        aria-label="Next photo"
        onClick={(e) => { e.stopPropagation(); onNext() }}
      >
        <Icon d="M9 5l7 7-7 7" />
      </button>

      <div className="lightbox-counter">
        {index + 1} / {images.length}
      </div>
    </div>,
    document.body
  )
}

export default function OurStory({ backgroundImage }) {
  const [openIndex, setOpenIndex] = useState(null)

  const close = useCallback(() => setOpenIndex(null), [])
  const prev = useCallback(
    () => setOpenIndex((i) => (i - 1 + images.length) % images.length),
    []
  )
  const next = useCallback(
    () => setOpenIndex((i) => (i + 1) % images.length),
    []
  )

  return (
    <div className="our-story" style={{ backgroundImage }}>
      <h2 className="story-title">OUR STORY</h2>
      <div className="story-gallery">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            className="story-photo"
            aria-label={`Open photo ${idx + 1}`}
            onClick={() => setOpenIndex(idx)}
          >
            <img src={img} alt={`Story ${idx + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox index={openIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </div>
  )
}
