import { PartialType } from '@nestjs/mapped-types'
import { CounterpartyUnitCreateDto } from './counterparty-units-create'

export class CounterpartyUnitUpdateDto extends PartialType(
	CounterpartyUnitCreateDto,
) {}
