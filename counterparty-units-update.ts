import { PartialType } from '@nestjs/mapped-types'
import { ClientUnitCreateDto } from './client-units-create'

export class ClientUnitUpdateDto extends PartialType(ClientUnitCreateDto) {}
