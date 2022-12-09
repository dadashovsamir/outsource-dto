import { ContractReadDto } from './contracts-read'
import { ProfessionReadDto } from './professions-read'
import { WorkMeasureReadDto } from './work-measures-read'
import { WorkParamReadDto } from './work-params-read'

export class PositionCreateDto {
	serviceName: ''
	internalRate: 0
	externalRate: 0
	profession: ProfessionReadDto | { id: number } = { id: 0 }
	workMeasure: WorkMeasureReadDto | { id: number } = { id: 0 }
	workParams: WorkParamReadDto[] | { id: number }[] = []
	contract: ContractReadDto | { id: number }
}
