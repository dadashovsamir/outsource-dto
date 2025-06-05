import { AttendanceCreateDto } from './attendances-create'
import { ClientUnitReadDto } from './client-units-read'
import { PricePositionReadDto } from './price-positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceReadDto extends AttendanceCreateDto {
	id = 0
	date: Date = new Date()
	worker: WorkerReadDto
	pricePosition: PricePositionReadDto
	clientUnit: ClientUnitReadDto
	constructor(initialData?: Partial<AttendanceReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
