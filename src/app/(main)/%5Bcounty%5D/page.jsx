'use client'

import { useParams } from 'next/navigation'
import LocationPage from '@/pages/location/LocationPage'

export default function DynamicLocationPage() {
  const params = useParams()
  return <LocationPage params={params} />
}
