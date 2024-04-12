import { PartialType } from '@nestjs/mapped-types'

import { CounterpartyCompanyCreateDto } from './counterparty-companies-create'

export class CounterpartyCompanyUpdateDto extends PartialType(
	CounterpartyCompanyCreateDto,
) {}
