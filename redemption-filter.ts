import { CounterpartyCompanyReadDto } from './counterparty-companies-read'
import { CounterpartyJurpersonReadDto } from './counterparty-jurpersons-read'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { JurpersonReadDto } from './jurpersons-read'
import { RedemptionTypeReadDto } from './redemption-types-read'
import { WorkerReadDto } from './workers-read'

export class RedemptionFilterDto {
	dateStart: string = ''
	dateEnd: string = ''
	periodStart: string = ''
	periodEnd: string = ''
	worker: WorkerReadDto[] | { id: number }[] = []
	counterpartyCompany: CounterpartyCompanyReadDto[] | { id: number }[] = []
	counterpartyJurperson: CounterpartyJurpersonReadDto[] | { id: number }[] = []
	counterpartyUnit: CounterpartyUnitReadDto[] | { id: number }[] = []
	jurperson: JurpersonReadDto[] | { id: number }[] = []
	redemptionType: RedemptionTypeReadDto[] | { id: number }[] = []
}
