import { UnitReadDto } from './units-read'
import { WorkerCreateDto } from './workers-create'

export class WorkerReadDto extends WorkerCreateDto {
	id = 0
	unit: UnitReadDto
	constructor(unit: UnitReadDto) {
		super()
		this.unit = unit
	}
}
