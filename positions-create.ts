import { ContractReadDto } from './contracts-read'
import { ProfessionReadDto } from './professions-read'
import { WorkMeasureReadDto } from './work-measures-read'
import { WorkParamReadDto } from './work-params-read'

export class PositionCreateDto {
	serviceName: string
	internalRate: number
	externalRate: number
	profession: ProfessionReadDto | { id: number }
	workMeasure: WorkMeasureReadDto | { id: number }
	contract: ContractReadDto | { id: number }
	workParams: WorkParamReadDto[] | { id: number }[]
}
