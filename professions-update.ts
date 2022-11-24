import { PartialType } from '@nestjs/mapped-types'
import { ProfessionCreateDto } from './professions-create'

export class ProfessionUpdateDto extends PartialType(ProfessionCreateDto) {}
