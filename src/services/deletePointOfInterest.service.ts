export default async function deletePointOfInterest (cityId: number, pointOfInterestId: number, token: null | undefined | string): Promise<Response> {
  const API_URL = import.meta.env.VITE_API_URL as string
  return await fetch(`${API_URL}/api/cities/${cityId}/pointsofinterest/${pointOfInterestId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token != null ? token : ''}`
    }
  })
}
