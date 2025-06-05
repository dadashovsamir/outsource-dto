import { UnitGroupReadDto } from './unit-groups-read'

export class ClientUnitCreateDto {
	name: string
	address = ''
	unitGroup?: UnitGroupReadDto | { id: number } | null
}
