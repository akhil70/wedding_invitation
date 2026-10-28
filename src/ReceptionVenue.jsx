// Venue section with map. Used for both the wedding and reception venues.
export function VenueSection({ title, venueName, addressLines, mapQuery, backgroundImage }) {
  const q = encodeURIComponent(mapQuery)
  const embedUrl = `https://maps.google.com/maps?q=${q}&z=16&output=embed`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`

  return (
    <div className="venue-section" style={{ backgroundImage }}>
      <div className="venue-content">
        <h2 className="venue-title">{title}</h2>

        <div className="venue-info">
          <p className="venue-name">{venueName}</p>
          {addressLines.map((line, i) => (
            <p key={line} className={i === addressLines.length - 1 ? "venue-city" : "venue-address"}>
              {line}
            </p>
          ))}
        </div>

        <div className="map-container">
          <iframe
            title={`Map of ${venueName}`}
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0, borderRadius: "10px" }}
            src={embedUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="maps-link">
          Get Directions
        </a>
      </div>
    </div>
  )
}

export default function ReceptionVenue({ backgroundImage }) {
  return (
    <VenueSection
      title="RECEPTION VENUE"
      venueName="Royal Palace Auditorium"
      addressLines={[
        "Kariyode, Ponnamkode",
        "Koottilakkadavu Rd, Karimpuzha-II",
        "Kerala 678595, India",
      ]}
      mapQuery="Royal Palace Auditorium, Kariyode, Ponnamkode, Kerala 678595"
      backgroundImage={backgroundImage}
    />
  )
}
