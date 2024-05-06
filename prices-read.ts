import { PriceCreateDto } from './prices-create'
import { JurpersonReadDto } from './jurpersons-read'
import { UnitReadDto } from './units-read'

export class PriceReadDto extends PriceCreateDto {
	id = 0
	unit: UnitReadDto | { id: number }
	jurperson: JurpersonReadDto
	constructor(unit: UnitReadDto | { id: number }) {
		super()
		this.unit = unit
	}
}
