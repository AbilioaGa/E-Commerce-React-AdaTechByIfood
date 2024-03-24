import { Header } from '@/components/Header'
import { ProductCarousel } from '@/components/ProductCarousel'
import { ProductList } from '@/components/ProductList'

export function Home() {
	return (
		<div>
			<Header />
			<ProductCarousel />
			<ProductList />
		</div>
	)
}
