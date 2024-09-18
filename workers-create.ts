import { UnitReadDto } from './units-read'
import { WorkParamReadDto } from './work-params-read'

export class WorkerCreateDto {
	name = ''
	phone = ''
	birthday = new Date('1900-01-01')
	addressResidence = ''
	addressRegistration = ''
	passport = ''
	paymentDetails = ''
	comment = ''
	workParams: WorkParamReadDto[] | { id: number }[] = []
	unit: UnitReadDto | { id: number }
}
