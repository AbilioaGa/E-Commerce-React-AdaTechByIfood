import { Link, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
	const error = useRouteError() as Error

	return (
		<div className="flex h-screen flex-col items-center justify-center gap-2">
			<h1 className="font-bold·text-4xl">Whoops, algo aconteceu...</h1>
			<p className="text-accent-foreground">
				Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:
			</p>
			<pre>{error?.message || JSON.stringify(error)}</pre>
			<p className="text-accent-foreground">
				Voltar para a{' '}
				<Link to="/" className="text-primary">
					Página Inicial
				</Link>
			</p>
		</div>
	)
}
