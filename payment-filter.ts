import { WorkParamReadDto } from './work-params-read'
import { WorkerReadDto } from './workers-read'

export class PaymentFilterDto {
	dateStart: string
	dateEnd: string
	periodStart: string
	periodEnd: string
	workParamsPayer: WorkParamReadDto[] | { id: number }[] = []
	workParamsRecipient: WorkParamReadDto[] | { id: number }[] = []
	payer: WorkerReadDto[] | { id: number }[] = []
	recipient: WorkerReadDto[] | { id: number }[] = []
}
