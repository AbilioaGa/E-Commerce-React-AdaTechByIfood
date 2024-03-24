import { getAllProducts } from '@/api/products/getAllProducts'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { useQuery } from '@tanstack/react-query'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export function ProductCarousel() {
	const { data: products } = useQuery({
		queryKey: ['products'],
		queryFn: getAllProducts,
		staleTime: Number.POSITIVE_INFINITY,
	})

	const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

	return (
		<Carousel
			opts={{
				loop: true,
			}}
			plugins={[plugin.current]}
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{products?.map((product) => (
					<CarouselItem key={product.id}>
						<Link to={`/products/${product.id}`}>
							<section className="px-2 py-10 md:px-0">
								<div className="container mx-auto max-w-6xl items-center">
									<div className="flex flex-wrap items-center">
										<div className="w-full md:w-1/2 md:px-3">
											<div className="w-full space-y-6 lg:max-w-lg sm:max-w-md md:space-y-4 lg:pr-0 sm:pr-5 md:pb-0">
												<h1 className="text-pretty font-extrabold text-4xl tracking-tight lg:text-5xl md:text-4xl sm:text-5xl xl:text-6xl">
													<span className="block xl:inline">
														{product.title}
													</span>
												</h1>
											</div>
										</div>
										<div className="flex items-center justify-center">
											<div className="h-80 w-80 overflow-hidden">
												<img src={product.image} alt={product.title} />
											</div>
										</div>
									</div>
								</div>
							</section>
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="absolute left-0" />
			<CarouselNext className="absolute right-0" />
		</Carousel>
	)
}
