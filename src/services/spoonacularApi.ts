import axios, { AxiosResponse } from 'axios';

const SPOONACULAR_API_KEY = '125aa4fd9a2341288ae16a72bc48123f';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export class SpoonacularApi {
  private static readonly instance = axios.create({
    baseURL: BASE_URL,
    params: {
      apiKey: SPOONACULAR_API_KEY,
    },
  });

  public static async getRandomRecipes(count: number = 5): Promise<AxiosResponse<any>> {
    return this.instance.get('/random', {
      params: {
        number: count,
      },
    });
  }

  public static async getRecipeInfo(id: number): Promise<AxiosResponse<any>> {
    return this.instance.get(`/${id}/information`, {
      params: {
        includeNutrition: true,
      },
    });
  }
}