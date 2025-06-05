import { UnitPositionCreateDto } from './unit-positions-create'
import { ClientUnitReadDto } from './client-units-read'
import { ProfessionReadDto } from './professions-read'

export class UnitPositionReadDto extends UnitPositionCreateDto {
	id = 0
	profession: ProfessionReadDto
	clientUnit: ClientUnitReadDto | { id: number }
	constructor(initialData?: Partial<UnitPositionReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
