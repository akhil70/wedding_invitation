export default function ReceptionVenue({ backgroundImage }) {
  const venueName = "Royal Palace Auditorium"
  const address1 = "Kariyode, Ponnamkode"
  const address2 = "Koottilakkadavu Rd, Karimpuzha-II"
  const city = "Kerala 678595, India"
  const lat = 10.8505
  const lng = 76.2519

  const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(venueName + ' ' + address1 + ' ' + city)}`

  return (
    <div className="venue-section" style={{ backgroundImage }}>
      <div className="venue-content">
        <h2 className="venue-title">RECEPTION VENUE</h2>

        <div className="venue-info">
          <p className="venue-name">{venueName}</p>
          <p className="venue-address">{address1}</p>
          <p className="venue-address">{address2}</p>
          <p className="venue-city">{city}</p>
        </div>

        <div className="map-container">
          <iframe
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0, borderRadius: "10px" }}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.${Math.random().toString().slice(2, 11)}!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5a8d5d5d5d5d5%3A0x${Math.random().toString(16).slice(2, 10)}!2sRoyal%20Palace%20Auditorium!5e0!3m2!1sen!2sin!4v${Date.now()}`}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="maps-link">
          View on Google Maps
        </a>
      </div>
    </div>
  )
}
