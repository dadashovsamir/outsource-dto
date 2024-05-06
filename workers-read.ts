import { UnitReadDto } from './units-read'
import { WorkParamReadDto } from './work-params-read'
import { WorkerCreateDto } from './workers-create'

export class WorkerReadDto extends WorkerCreateDto {
	id = 0
	unit: UnitReadDto | { id: number }
	workParams: WorkParamReadDto[]
	constructor(unit: UnitReadDto | { id: number }) {
		super()
		this.unit = unit
	}
}
