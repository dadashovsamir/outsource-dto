import { ClientCompanyReadDto } from './client-companies-read'
import { ClientUnitReadDto } from './client-units-read'
import { RedemptionTypeReadDto } from './redemption-types-read'
import { UnitPositionReadDto } from './unit-positions-read'
import { WorkParamReadDto } from './work-params-read'
import { WorkerReadDto } from './workers-read'

export class RedemptionFilterDto {
	dateStart: string = ''
	dateEnd: string = ''
	periodStart: string = ''
	periodEnd: string = ''
	worker: WorkerReadDto[] | { id: number }[] = []
	workParamsWorker: WorkParamReadDto[] | { id: number }[] = []
	clientCompany: ClientCompanyReadDto[] | { id: number }[] = []
	clientUnit: ClientUnitReadDto[] | { id: number }[] = []
	redemptionType: RedemptionTypeReadDto[] | { id: number }[] = []
	unitPosition: UnitPositionReadDto[] = []
}
