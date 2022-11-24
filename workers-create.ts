import { UnitReadDto } from './units-read'
import { WorkParamReadDto } from './work-params-read'

export class WorkerCreateDto {
	name: string
	phone: string
	birthday: Date
	addressResidence: string
	addressRegistration: string
	passport: string
	paymentDetails: string
	comment: string
	workParams: WorkParamReadDto[] | { id: number }[]
	unit: UnitReadDto | { id: number }
}
