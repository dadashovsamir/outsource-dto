import { UnitReadDto } from './units-read'
import { WorkParamReadDto } from './work-params-read'
import { WorkerCreateDto } from './workers-create'

export class WorkerReadDto extends WorkerCreateDto {
	id: number
	workParams: WorkParamReadDto[] | { id: number }[]
	unit: UnitReadDto | { id: number }
}
