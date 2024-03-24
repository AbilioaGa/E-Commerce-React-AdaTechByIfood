import { api } from '@/lib/axios'

export interface GetAllProductsResponse {
	id: number
	title: string
	price: number
	category: string
	description: string
	image: string
	rating: {
		rate: number
		count: number
	}
}

export async function getAllProducts() {
	const response = await api.get<GetAllProductsResponse[]>('/products')
	const filteredProducts = response.data.filter(
		(product) =>
			product.category === "men's clothing" ||
			product.category === "women's clothing" ||
			product.category === 'jewelery',
	)

	return filteredProducts
}
