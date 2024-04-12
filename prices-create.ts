import { JurpersonReadDto } from './jurpersons-read'
import { UnitReadDto } from './units-read'

export class PriceCreateDto {
  date: Date = new Date()
  unit: UnitReadDto | { id: number }
  jurperson: JurpersonReadDto | { id: number } = { id: 0 }
  comment: string = ''
}
