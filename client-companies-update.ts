import { PartialType } from '@nestjs/mapped-types'

import { ClientCompanyCreateDto } from './client-companies-create'

export class ClientCompanyUpdateDto extends PartialType(
	ClientCompanyCreateDto,
) {}
