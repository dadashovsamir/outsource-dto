import { ClientCompanyReadDto } from './client-companies-read'
import { ClientUnitReadDto } from './client-units-read'
import { UnitPositionReadDto } from './unit-positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceFilterDto {
	dateStart: string = ''
	dateEnd: string = ''
	worker: WorkerReadDto[] | { id: number }[] = []
	clientCompany: ClientCompanyReadDto[] | { id: number }[] = []
	clientUnit: ClientUnitReadDto[] | { id: number }[] = []
	unitPosition: UnitPositionReadDto[] | { id: number }[] = []
}
