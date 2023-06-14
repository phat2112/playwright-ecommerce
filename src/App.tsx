import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
// project import
import Login from '@screen/login';
import Admin from '@screen/Admin';
import ProductList from '@screen/ProductList';
import ProtectRoutes from '@guards/ProtectRoutes';
import ToastProvider from '@components/Toast';
import MainLayout from '@layouts/MainLayout';
import AuthProvider from '@contexts/AuthContext';
import ProductProvider from '@contexts/ProductContext';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: (
						<ProtectRoutes>
							<ProductList />
						</ProtectRoutes>
					),
				},
				{
					path: '/admin',
					element: (
						<ProtectRoutes defineRoles={['admin']}>
							<Admin />
						</ProtectRoutes>
					),
				},
			],
		},
		{path: '*', element: <Navigate to="/" replace />},
	]);

	return (
		<AuthProvider>
			<ProductProvider>
				<RouterProvider router={router} />
				<ToastProvider />
			</ProductProvider>
		</AuthProvider>
	);
};

export default App;
