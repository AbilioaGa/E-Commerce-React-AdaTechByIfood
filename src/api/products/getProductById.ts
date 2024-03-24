import { api } from '@/lib/axios'

export interface GetProductByIdParams {
	id: number
}

export interface GetProductByIdResponse {
	id: number
	title: string
	price: string
	category: string
	description: string
	image: string
	rating: {
		rate: number
		count: number
	}
}

export async function getProductById({ id }: GetProductByIdParams) {
	const response = await api.get<GetProductByIdResponse>(`/products/${id}`)
	return response.data
}
