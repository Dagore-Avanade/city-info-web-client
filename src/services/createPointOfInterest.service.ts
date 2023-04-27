import IPointOfInterestCreation from '../interfaces/IPointOfInterestCreation'

export default async function createPointOfInterestService (cityId: number, pointOfInterest: IPointOfInterestCreation, token: null | undefined | string): Promise<Response> {
  const API_URL = import.meta.env.VITE_API_URL as string
  return await fetch(`${API_URL}/api/cities/${cityId}/pointsofinterest`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token != null ? token : ''}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pointOfInterest)
  })
}
