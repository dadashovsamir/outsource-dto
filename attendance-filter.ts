import { CounterpartyCompanyReadDto } from './counterparty-companies-read'
import { CounterpartyJurpersonReadDto } from './counterparty-jurpersons-read'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { JurpersonReadDto } from './jurpersons-read'
import { UnitPositionReadDto } from './unit-positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceFilterDto {
	dateStart: string = ''
	dateEnd: string = ''
	worker: WorkerReadDto[] | { id: number }[] = []
	counterpartyCompany: CounterpartyCompanyReadDto[] | { id: number }[] = []
	counterpartyJurperson: CounterpartyJurpersonReadDto[] | { id: number }[] = []
	counterpartyUnit: CounterpartyUnitReadDto[] | { id: number }[] = []
	jurperson: JurpersonReadDto[] | { id: number }[] = []
	unitPosition: UnitPositionReadDto[] | { id: number }[] = []
}
