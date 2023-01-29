import { container } from 'tsyringe'
import { CreateLoginController } from '../controllers/CreateLoginController'
import { CreateUserController } from '../controllers/CreateUserController'
import { IUsersController } from '../controllers/IUsersController'
import { ListUsersController } from '../controllers/ListUsersController'
import { ShowProfileController } from '../controllers/ShowProfileController'
import { UpdateProfileController } from '../controllers/UpdateProfileController'
import { UpInsertAvatarController } from '../controllers/UpInsertAvatarController'
import { IUsersRepository } from '../repositories/IUsersRepository'
import { UsersRepository } from '../repositories/UsersRepository'

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository)
container.registerSingleton<IUsersController>('CreateUserController', CreateUserController)
container.registerSingleton<IUsersController>('ListUsersController', ListUsersController)
container.registerSingleton<IUsersController>('CreateLoginController', CreateLoginController)
container.registerSingleton<IUsersController>('UpInsertAvatarController', UpInsertAvatarController)
container.registerSingleton<IUsersController>('ShowProfileController', ShowProfileController)
container.registerSingleton<IUsersController>('UpdateProfileController', UpdateProfileController)
