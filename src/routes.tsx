import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Home } from './pages/app/Home'
import { ProductDetails } from './pages/app/ProductDetails'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/product/:id',
		element: <ProductDetails />,
		errorElement: <ErrorPage />,
	},
	// {
	//   path: '/sign-up',
	//   element: <SignUp />,
	//   errorElement: <ErrorPage />,
	// },
	// {
	//   path: '/contacts',
	//   element: <Contacts />,
	//   errorElement: <ErrorPage />,
	// },
	{
		path: '*',
		element: <NotFoundPage />,
	},
])
