import { PartialType } from '@nestjs/mapped-types'
import { AttendanceCreateDto } from './attendances-create'

export class AttendanceUpdateDto extends PartialType(AttendanceCreateDto) {}
