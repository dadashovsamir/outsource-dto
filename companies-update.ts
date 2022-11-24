import { PartialType } from '@nestjs/mapped-types'
import { CompanyCreateDto } from './companies-create'

export class CompanyUpdateDto extends PartialType(CompanyCreateDto) {}
