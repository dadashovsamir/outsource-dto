import { PartialType } from '@nestjs/mapped-types'
import { CounterpartyJurpersonCreateDto } from './counterparty-jurpersons-create'

export class CounterpartyJurpersonUpdateDto extends PartialType(
	CounterpartyJurpersonCreateDto
) {}
