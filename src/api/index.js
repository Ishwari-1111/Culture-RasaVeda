import { recipes } from "../data/recipes";
import { streetFood } from "../data/streetFood";

const api = {
  get: (endpoint) => {
    if (endpoint === "/recipes") {
      return Promise.resolve({ data: recipes });
    }
    if (endpoint === "/street-food") {
      return Promise.resolve({ data: streetFood });
    }
    return Promise.reject("Unknown endpoint");
  }
};

export default api;