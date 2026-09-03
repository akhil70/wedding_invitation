export default function CeremonyInfo({ backgroundImage }) {
  return (
    <div className="ceremony-section" style={{ backgroundImage }}>
      <div className="ceremony-content">
        <h1 className="ceremony-title">CEREMONY INFO</h1>

        <div className="parents-container">
          <div className="parents-column">
            <p className="title">Mr. & Mrs.</p>
            <h2 className="parents-name">Shaji Joseph</h2>
            <p className="child-name">Laisamma Shaji</p>
            <p className="address">Muthirenthikkal(H), Vakkadappuram PO, Kerala</p>
          </div>

          <div className="parents-column">
            <p className="title">Mr. & Mrs.</p>
            <h2 className="parents-name">Samuel Harper</h2>
            <p className="child-name">Athira Harper</p>
            <p className="address">Piazza della Signoria 12, 50122 Florence, Italy</p>
          </div>
        </div>

        <div className="announcement">
          <p className="announce-text">With joy, we announce</p>
          <p className="marriage-text">the marriage of Akhil & Athira</p>
        </div>
      </div>
    </div>
  )
}
