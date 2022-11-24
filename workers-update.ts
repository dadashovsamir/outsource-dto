import { PartialType } from '@nestjs/mapped-types'
import { WorkerCreateDto } from './workers-create'

export class WorkerUpdateDto extends PartialType(WorkerCreateDto) {}
