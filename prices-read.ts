import { PriceCreateDto } from './prices-create'
import { JurpersonReadDto } from './jurpersons-read'
import { UnitReadDto } from './units-read'

export class PriceReadDto extends PriceCreateDto {
  id = 0
  jurperson: JurpersonReadDto
  constructor(unit: UnitReadDto) {
    super()
    this.unit = unit
  }
}
