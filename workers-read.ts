import { UnitReadDto } from './units-read'
import { WorkParamReadDto } from './work-params-read'
import { WorkerCreateDto } from './workers-create'

export class WorkerReadDto extends WorkerCreateDto {
	id = 0
	unit: UnitReadDto
	workParams: WorkParamReadDto[]
	constructor(unit: UnitReadDto) {
		super()
		this.unit = unit
	}
}
