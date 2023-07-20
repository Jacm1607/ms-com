import { User } from "../entities/UserEntity";

export interface UserRepository {
  createUser(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(userId: string): Promise<User | null>;
}
