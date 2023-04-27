import IPointOfInterest from '../interfaces/IPointOfInterest'

export default async function updatePointOfInterestService (cityId: number, pointOfInterest: IPointOfInterest, token: null | undefined | string): Promise<Response> {
  const API_URL = import.meta.env.VITE_API_URL as string
  return await fetch(`${API_URL}/api/cities/${cityId}/pointsofinterest/${pointOfInterest.id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token != null ? token : ''}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: pointOfInterest.name,
      description: pointOfInterest.description
    })
  })
}
