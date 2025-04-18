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
      console.error('Error fetching recipes:', error);
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

  public static async AddFavorite(recipeId: number): Promise<AxiosResponse<RecipeTypes>> {
    try{
      return await this.Instance.post('/', { recipeId });
    } catch (error) {
      console.error('Error adding favorite recipe:', error);
      throw error;
    }
  }

  public static async GetFavorites(): Promise<AxiosResponse<RecipeTypes[]>> {
    try {
      return await this.Instance.get('/');
    } catch (error) {
      console.error('Error fetching favorites:', error);
      throw error;
    }
  }

  public static async RemoveFavorite(recipeId: number): Promise<AxiosResponse> {
    try {
      return await this.Instance.delete(`/${recipeId}`);
    } catch (error) {
      console.error('Error removing favorite:', error);
      throw error;
    }
  }
}
