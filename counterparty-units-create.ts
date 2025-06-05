import { UnitGroupReadDto } from './unit-groups-read'

export class CounterpartyUnitCreateDto {
	name: string
	address = ''
	unitGroup?: UnitGroupReadDto | { id: number } | null
}
