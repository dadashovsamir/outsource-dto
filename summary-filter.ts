import { WorkParamReadDto } from './work-params-read'
import { WorkerReadDto } from './workers-read'

export class SummaryFilterDto {
	dateStart: string
	dateEnd: string
	periodStart: string
	periodEnd: string
	workParamsWorker: WorkParamReadDto[] | { id: number }[] = []
	worker: WorkerReadDto[] | { id: number }[] = []
}
