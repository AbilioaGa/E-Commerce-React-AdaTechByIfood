import type { GetAllProductsResponse } from '@/api/products/getAllProducts'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { LuHeart } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Button } from './ui/button'

export function ProductCard({
	products,
}: { products: GetAllProductsResponse }) {
	return (
		<>
			<Card className="my-6 h-[432px] w-[272px]">
				<CardHeader className="flex-row-reverse">
					<LuHeart className="cursor-pointer text-muted-foreground hover:fill-rose-500 hover:text-foreground" />
				</CardHeader>
				<Link to={`/product/${products?.id}`}>
					<CardContent>
						<div className="grid gap-4">
							<img
								className="mx-auto size-32 transition-transform duration-300 ease-in-out hover:scale-110"
								src={products?.image}
								alt={products?.title}
							/>
							<CardDescription className="capitalize">
								{products?.category}
							</CardDescription>
							<CardTitle className="h-12 text-pretty font-medium text-primary text-sm">
								{products?.title}
							</CardTitle>
							<CardDescription className="font-semibold text-primary text-xl">
								${products?.price}
							</CardDescription>
						</div>
					</CardContent>
				</Link>
				<CardFooter>
					<Sidebar>
						<Sidebar.Button asChild>
							<Button className="w-full">Comprar</Button>
						</Sidebar.Button>
					</Sidebar>
				</CardFooter>
			</Card>
		</>
	)
}
