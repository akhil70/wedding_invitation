export default function WeddingDetails({ backgroundImage }) {
  return (
    <div className="details-section" style={{ backgroundImage }}>
      <div className="details-content">
        <h2 className="ceremony-title">Wedding Ceremony</h2>
        <p className="location">St Mary's church karakurussi</p>

        <div className="time-section">
          <p className="time-label">TIME</p>
          <p className="time">16:00</p>
        </div>

        <div className="date-section">
          <p className="day">SATURDAY</p>
          <p className="date-number">14</p>
          <p className="month">NOVEMBER</p>
          <p className="year">2026</p>
        </div>
      </div>
    </div>
  )
}
