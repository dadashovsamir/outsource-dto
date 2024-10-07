import { CompanyReadDto } from './companies-read'
import { RoleReadDto } from './roles-read'
import { UnitReadDto } from './units-read'
import { UserCreateDto } from './users-create'

export class UserReadDto extends UserCreateDto {
	id = 0
	companies: CompanyReadDto[]
	units: UnitReadDto[]
	roles: RoleReadDto[]
	constructor(initialData?: Partial<UserReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
