import { getRepository, Repository } from "typeorm";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "@modules/cars/repositories/ISpecificationsRepository";
import { Specification } from "@modules/cars/entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  // public static getInstance(): SpecificationsRepository {
  //   if (!SpecificationsRepository.INSTANCE) {
  //     SpecificationsRepository.INSTANCE = new SpecificationsRepository();
  //   }
  //   return SpecificationsRepository.INSTANCE;
  // }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });
    this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });
    return specification;
  }
}

export { SpecificationsRepository };
