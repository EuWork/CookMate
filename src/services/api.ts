import axios, { AxiosResponse } from 'axios';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

const createInstance = (path: string) => {
  const service = axios.create({
    baseURL: `http://10.0.2.2:3000${path[0] === '/' ? path : `/${path}`}`,
});

  service.interceptors.request.use(request => {
    return request;
  });

  return service;
};

export class RecipesApi{
  private static readonly  Instance = createInstance('/recipes');

  public static async GetRecipes(): Promise<AxiosResponse<RecipeTypes[]>> {
    try {
      return await this.Instance.get('/');
    } catch (error) {
      throw error;
    }
  }
  public static async CreateRecipe(recipe: Omit<RecipeTypes, 'id'>): Promise<AxiosResponse<RecipeTypes>> {
    return this.Instance.post('/', recipe);
  }

  public static async UpdateRecipe(recipe: RecipeTypes): Promise<AxiosResponse<RecipeTypes>> {
    return this.Instance.put(`/${recipe.id}`, recipe);
  }

  public static async DeleteRecipe(id: number): Promise<AxiosResponse> {
    return this.Instance.delete(`/${id}`);
  }
}

export class FavoritesApi {
  private static readonly  Instance = createInstance('/favorites');

  public static async AddFavorite(recipeId: number | undefined): Promise<AxiosResponse<RecipeTypes>> {
    try {
      return await this.Instance.post('', { recipeId });
    } catch (error) {
      console.error('Error adding favorite:', error);
      throw error;
    }
  }

  public static async AddExternalFavorite(recipe: {
    externalId: string;
    name: string;
    cookingTime: string;
    calories: string;
    image?: string;
    ingredients: Array<{name: string; amount: string}>;
    steps: string[];
  }): Promise<AxiosResponse<RecipeTypes>> {
    try {
      return await this.Instance.post('/external', recipe);
    } catch (error) {
      console.error('Error adding external favorite:', error);
      throw error;
    }
  }

  public static async GetFavorites(): Promise<AxiosResponse<RecipeTypes[]>> {
    try {
      return await this.Instance.get('/');
    } catch (error) {
      throw error;
    }
  }

  public static async RemoveFavorite(id: number | undefined): Promise<AxiosResponse> {
    try {
      return await this.Instance.delete(`/${id}`);
    } catch (error) {
      console.error('Error removing favorite:', {
        id,
      });
      throw error;
    }
  }
}
