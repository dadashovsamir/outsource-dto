import { ClientUnitReadDto } from './client-units-read'

export class PriceCreateDto {
	date: Date = new Date()
	clientUnit?: ClientUnitReadDto | { id: number }
	comment = ''
}
