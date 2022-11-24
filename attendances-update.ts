import { PartialType } from '@nestjs/mapped-types'
export class AttendanceUpdateDto extends PartialType(AttendanceCreateDto) {}
