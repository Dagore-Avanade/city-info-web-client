import ICity from './ICity'
import IPointOfInterest from './IPointOfInterest'

export default interface ICityWithPointsOfInterest extends ICity {
  pointsOfInterest: IPointOfInterest[]
}
