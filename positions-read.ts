import { ContractReadDto } from './contracts-read'
import { PositionCreateDto } from './positions-create'
import { ProfessionReadDto } from './professions-read'
import { WorkMeasureReadDto } from './work-measures-read'
import { WorkParamReadDto } from './work-params-read'

export class PositionReadDto extends PositionCreateDto {
	id: number
	profession: ProfessionReadDto
	workMeasure: WorkMeasureReadDto
	contract: ContractReadDto
	workParams: WorkParamReadDto[]
}
