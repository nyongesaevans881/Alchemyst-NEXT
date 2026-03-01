'use client'

import { useParams } from 'next/navigation'
import ProfileDetailsPage from '@/pages/profile/ProfileDetailsPage'

export default function DynamicProfilePage() {
  const params = useParams()
  return <ProfileDetailsPage params={params} />
}
