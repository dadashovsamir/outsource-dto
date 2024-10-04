import { UnitReadDto } from './units-read'
import { WorkParamReadDto } from './work-params-read'
import { WorkerCreateDto } from './workers-create'

export class WorkerReadDto extends WorkerCreateDto {
	id = 0
	unit: UnitReadDto | { id: number }
	workParams: WorkParamReadDto[] | [{ id: number }] = []
	constructor(initialData?: Partial<WorkerReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
