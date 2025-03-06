import axios from "axios";


const API_URL = "https://67b8d8c9699a8a7baef57ad0.mockapi.io/api";

export interface Product {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
    createdAt: string;
  }

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});


export const getProducts = async (): Promise<Product[]> => {
    try {
      const response = await axiosInstance.get('/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

export const createProduct = async (product: Omit<Product, 'id' | 'createdAt'>): Promise<Product> => {
    try {
      const response = await axiosInstance.post('/products', product);
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  };



