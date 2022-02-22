import { User } from "@modules/accounts/entities/User";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    driver_license,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      driver_license,
      email,
      name,
      password,
    });

    Promise.resolve(this.users.push(user));
  }
  async findByEmail(email: string): Promise<User> {
    return Promise.resolve(this.users.find((user) => user.email === email));
  }
  async findById(userId: string): Promise<User> {
    return Promise.resolve(this.users.find((user) => user.id === userId));
  }
}

export { UsersRepositoryInMemory };
