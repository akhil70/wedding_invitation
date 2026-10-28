import { VenueSection } from './ReceptionVenue'

export default function WeddingVenue({ backgroundImage }) {
  return (
    <VenueSection
      title="WEDDING VENUE"
      venueName="St Mary's Church"
      addressLines={["Karakurussi", "Kerala 678595, India"]}
      // Plus Code from the shared Google Maps link
      mapQuery="WFJG+QRM, Kerala 678595"
      backgroundImage={backgroundImage}
    />
  )
}
