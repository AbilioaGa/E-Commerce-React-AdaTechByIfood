import { Separator } from '@/components/ui/separator'
import { LuGem, LuShirt } from 'react-icons/lu'
import { Link } from 'react-router-dom'

export function SubNav() {
	return (
		<>
			<ul className="flex h-12 items-center justify-center gap-2 bg-secondary-foreground text-muted-foreground">
				<li>
					<Link
						to="/"
						className="mx-8 flex items-center justify-center hover:text-muted"
					>
						<LuShirt className="mr-2" />
						Roupas
					</Link>
				</li>
				<Separator orientation="vertical" className="h-6 bg-muted-foreground" />
				<li>
					<Link
						to="/"
						className="mx-8 flex items-center justify-center hover:text-muted"
					>
						<LuGem className="mr-2" />
						Jóias
					</Link>
				</li>
			</ul>
		</>
	)
}
