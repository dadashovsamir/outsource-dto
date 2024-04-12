import { PartialType } from '@nestjs/mapped-types'
import { CounterpartyUnitPositionCreateDto } from './counterparty-unit-positions-create'

export class CounterpartyUnitPositionUpdateDto extends PartialType(
	CounterpartyUnitPositionCreateDto,
) {}
