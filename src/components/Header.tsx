import {
	LuHeart,
	LuSearch,
	LuShoppingBag,
	LuSparkles,
	LuUser,
} from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { SubNav } from './SubNav'
import { Input } from './ui/input'

export function Header() {
	return (
		<>
			<nav>
				<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
					<div className="flex items-center gap-4">
						<Link
							to="/"
							className="flex items-center justify-center gap-3 text-xl"
						>
							<LuSparkles className="h-10 w-10" />
							<span className="font-semibold">modafusion</span>
						</Link>

						<div className="relative">
							<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
								<LuSearch />
								<span className="sr-only">Search icon</span>
							</div>
							<Input className="w-96 ps-10 text-sm" placeholder="Busque aqui" />
						</div>
					</div>

					<ul className="flex space-x-8">
						<li>
							<Link to="/" className="block px-3 py-2">
								<LuHeart className="h-6 w-6" />
							</Link>
						</li>
						<li>
							<Sidebar>
								<Sidebar.Button asChild>
									<Link to="/" className="block px-3 py-2">
										<LuShoppingBag className="h-6 w-6" />
									</Link>
								</Sidebar.Button>
							</Sidebar>
						</li>
						<li>
							<Link to="/" className="block px-3 py-2">
								<LuUser className="h-6 w-6" />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<SubNav />
		</>
	)
}
