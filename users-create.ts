import { CompanyReadDto } from './companies-read'
import { RoleReadDto } from './roles-read'
import { UnitReadDto } from './units-read'

export class UserCreateDto {
	name: string
	email: string
	password: string
	isActive: boolean
	companies: CompanyReadDto[] | { id: number }[]
	units: UnitReadDto[] | { id: number }[]
	roles: RoleReadDto[] | { id: number }[]
}
