import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createUser = User.create(user)
  if (!createUser) {
    throw new Error('Failed to create new use')
  }
  return createUser
}

export default {
  createUser,
}
