import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "@modules/cars/repositories/ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const filteredCategory = this.categories.find(
      (category) => category.name === name
    );
    return Promise.resolve(filteredCategory);
  }
  async list(): Promise<Category[]> {
    const all = this.categories;
    return Promise.resolve(all);
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();
    Object.assign(category, { name, description });
    this.categories.push(category);
    return Promise.resolve();
  }
}

export { CategoriesRepositoryInMemory };
