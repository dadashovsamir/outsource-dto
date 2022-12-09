import { CompanyReadDto } from './companies-read'
import { RoleCreateDto } from './roles-create'

export class RoleReadDto extends RoleCreateDto {
	id = 0
	company: CompanyReadDto
}
