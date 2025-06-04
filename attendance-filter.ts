import { CounterpartyCompanyReadDto } from './counterparty-companies-read'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { UnitPositionReadDto } from './unit-positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceFilterDto {
	dateStart: string = ''
	dateEnd: string = ''
	worker: WorkerReadDto[] | { id: number }[] = []
	counterpartyCompany: CounterpartyCompanyReadDto[] | { id: number }[] = []
	counterpartyUnit: CounterpartyUnitReadDto[] | { id: number }[] = []
	unitPosition: UnitPositionReadDto[] | { id: number }[] = []
}
