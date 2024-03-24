import { getProductById } from '@/api/products/getProductById'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { LuStar } from 'react-icons/lu'
import { Link, useParams } from 'react-router-dom'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Button } from './ui/button'

export interface GetProductByIdProps {
	id: number
}

const products = {
	name: 'Basic Tee 6-Pack',
	price: '$192',
	href: '#',
	breadcrumbs: [
		{ id: 1, name: 'Men', href: '#' },
		{ id: 2, name: 'Clothing', href: '#' },
	],
	images: [
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
			alt: 'Two each of gray, white, and black shirts laying flat.',
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
			alt: 'Model wearing plain black basic tee.',
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
			alt: 'Model wearing plain gray basic tee.',
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
			alt: 'Model wearing plain white basic tee.',
		},
	],
	colors: [
		{ name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
		{ name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
		{ name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
	],
	sizes: [
		{ name: 'XXS', inStock: false },
		{ name: 'XS', inStock: true },
		{ name: 'S', inStock: true },
		{ name: 'M', inStock: true },
		{ name: 'L', inStock: true },
		{ name: 'XL', inStock: true },
		{ name: '2XL', inStock: true },
		{ name: '3XL', inStock: true },
	],
	description:
		'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
	highlights: [
		'Hand cut and sewn locally',
		'Dyed with our proprietary colors',
		'Pre-washed & pre-shrunk',
		'Ultra-soft 100% cotton',
	],
	details:
		'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export function ProductById() {
	const [selectedColor, setSelectedColor] = useState(products.colors[0])
	const [selectedSize, setSelectedSize] = useState(products.sizes[2])

	const { id } = useParams()
	const { data: product } = useQuery({
		queryKey: ['product', id],
		queryFn: () => getProductById({ id: Number(id) }),
		staleTime: Number.POSITIVE_INFINITY,
	})

	return (
		<>
			{product && (
				<div>
					<Breadcrumb className="mx-auto max-w-screen-xl p-4">
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link to="/">Inicio</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link to="/">{product.category}</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage className="truncate">
									{product.title}
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<div className="bg-destructive-foreground">
						<div className="pt-6">
							<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
								<div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
									<img
										src={product.image}
										alt={product.title}
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
									<div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
										<img
											src={product.image}
											alt={product.title}
											className="h-full w-full object-cover object-center"
										/>
									</div>
									<div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
										<img
											src={product.image}
											alt={product.title}
											className="h-full w-full object-cover object-center"
										/>
									</div>
								</div>
								<div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
									<img
										src={product.image}
										alt={product.title}
										className="h-full w-full object-cover object-center"
									/>
								</div>
							</div>

							<div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
								<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
									<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
										{product.title}
									</h1>
								</div>

								{/* Options */}
								<div className="mt-4 lg:row-span-3 lg:mt-0">
									<h2 className="sr-only">Product information</h2>
									<p className="text-3xl tracking-tight text-gray-900">
										{product.price}
									</p>

									{/* Reviews */}
									<div className="mt-6">
										<h3 className="sr-only">Reviews</h3>
										<div className="flex items-center">
											<div className="flex items-center">
												{[0, 1, 2, 3, 4].map((rating) => (
													<LuStar
														key={rating}
														className={classNames(
															reviews.average > rating
																? 'text-gray-900'
																: 'text-gray-200',
															'h-5 w-5 flex-shrink-0',
														)}
														aria-hidden="true"
													/>
												))}
											</div>
											<p className="sr-only">
												{reviews.average} out of 5 stars
											</p>
											<a
												href={reviews.href}
												className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
											>
												{reviews.totalCount} reviews
											</a>
										</div>
									</div>

									<form className="mt-10">
										{/* Colors */}
										<div>
											<h3 className="text-sm font-medium text-gray-900">
												Color
											</h3>

											<RadioGroup
												value={selectedColor}
												onChange={setSelectedColor}
												className="mt-4"
											>
												<Label className="sr-only">Choose a color</Label>
												<div className="flex items-center space-x-3">
													{products.colors.map((color) => (
														<RadioGroupItem
															key={color.name}
															value={color}
															className={({ active, checked }) =>
																classNames(
																	color.selectedClass,
																	active && checked ? 'ring ring-offset-1' : '',
																	!active && checked ? 'ring-2' : '',
																	'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
																)
															}
														>
															<Label as="span" className="sr-only">
																{color.name}
															</Label>
															<span
																aria-hidden="true"
																className={classNames(
																	color.class,
																	'h-8 w-8 rounded-full border border-black border-opacity-10',
																)}
															/>
														</RadioGroupItem>
													))}
												</div>
											</RadioGroup>
										</div>

										{/* Sizes */}
										<div className="mt-10">
											<div className="flex items-center justify-between">
												<h3 className="text-sm font-medium text-gray-900">
													Size
												</h3>
												<a
													href="#"
													className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
												>
													Size guide
												</a>
											</div>

											<RadioGroup
												value={selectedSize}
												onChange={setSelectedSize}
												className="mt-4"
											>
												<Label className="sr-only">Choose a size</Label>
												<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
													{products.sizes.map((size) => (
														<RadioGroupItem
															key={size.name}
															value={size}
															disabled={!size.inStock}
															className={({ active }) =>
																classNames(
																	size.inStock
																		? 'cursor-pointer bg-white text-gray-900 shadow-sm'
																		: 'cursor-not-allowed bg-gray-50 text-gray-200',
																	active ? 'ring-2 ring-indigo-500' : '',
																	'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
																)
															}
														>
															{({ active, checked }) => (
																<>
																	<Label as="span">{size.name}</Label>
																	{size.inStock ? (
																		<span
																			className={classNames(
																				active ? 'border' : 'border-2',
																				checked
																					? 'border-indigo-500'
																					: 'border-transparent',
																				'pointer-events-none absolute -inset-px rounded-md',
																			)}
																			aria-hidden="true"
																		/>
																	) : (
																		<span
																			aria-hidden="true"
																			className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
																		>
																			<svg
																				className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
																				viewBox="0 0 100 100"
																				preserveAspectRatio="none"
																				stroke="currentColor"
																			>
																				<line
																					x1={0}
																					y1={100}
																					x2={100}
																					y2={0}
																					vectorEffect="non-scaling-stroke"
																				/>
																			</svg>
																		</span>
																	)}
																</>
															)}
														</RadioGroupItem>
													))}
												</div>
											</RadioGroup>
										</div>

										<Button
											type="submit"
											className="mt-10 flex w-full items-center justify-center"
										>
											Add to bag
										</Button>
									</form>
								</div>

								<div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
									{/* Description and details */}
									<div>
										<h3 className="sr-only">Description</h3>

										<div className="space-y-6">
											<p className="text-base text-gray-900 text-pretty normal-case">
												{product.description}
											</p>
										</div>
									</div>

									<div className="mt-10">
										<h2 className="text-sm font-medium text-gray-900">
											Details
										</h2>

										<div className="mt-4 space-y-6">
											<p className="text-sm text-gray-600 capitalize">
												{product.category}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
