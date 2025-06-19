import { UnitGroupReadDto } from './unit-groups-read'
import { ClientUnitCreateDto } from './client-units-create'

export class ClientUnitReadDto extends ClientUnitCreateDto {
	id = 0
	unitGroup?: UnitGroupReadDto | null
	constructor(initialData?: Partial<ClientUnitReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
