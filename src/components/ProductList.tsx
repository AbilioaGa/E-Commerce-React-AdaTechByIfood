import { getAllProducts } from '@/api/products/getAllProducts'
import { ProductCard } from '@/components/ProductCard'
import { useQuery } from '@tanstack/react-query'

export function ProductList() {
	const { data: products } = useQuery({
		queryKey: ['products'],
		queryFn: getAllProducts,
		staleTime: Number.POSITIVE_INFINITY,
	})
	return (
		<section className="bg-destructive-foreground">
			<div className="container grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4">
				{products?.map((product) => (
					<ProductCard key={product.id} products={product} />
				))}
			</div>
		</section>
	)
}
