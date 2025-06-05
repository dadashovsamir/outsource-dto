import { ClientUnitReadDto } from './client-units-read'
import { ProfessionReadDto } from './professions-read'

export class UnitPositionCreateDto {
	profession: ProfessionReadDto | { id: number } = { id: 0 }
	clientUnit: ClientUnitReadDto | { id: number } = { id: 0 }
}
