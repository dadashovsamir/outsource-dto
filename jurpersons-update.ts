import { PartialType } from '@nestjs/mapped-types'
import { JurpersonCreateDto } from './jurpersons-create'

export class JurpersonUpdateDto extends PartialType(JurpersonCreateDto) {}
