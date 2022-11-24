import { CompanyReadDto } from './companies-read'
import { RoleReadDto } from './roles-read'
import { UnitReadDto } from './units-read'
import { UserCreateDto } from './users-create'

export class UserReadDto extends UserCreateDto {
	id: number
	companies: CompanyReadDto[]
	units: UnitReadDto[]
	roles: RoleReadDto[]
}
