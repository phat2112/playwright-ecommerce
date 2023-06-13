import {useState} from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
// project import
import {UserInfo} from '@models';
import Login from '@screen/login';
import Admin from '@screen/Admin';
import ProductList from '@screen/ProductList';
import ProtectRoutes from '@guards/ProtectRoutes';
import ToastProvider from '@components/Toast';
import MainLayout from '@layouts/MainLayout';

const App = () => {
	const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

	const router = createBrowserRouter([
		{
			path: '/login',
			element: <Login getUserInfo={setUserInfo} />,
		},
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: (
						<ProtectRoutes userInfo={userInfo}>
							<ProductList />
						</ProtectRoutes>
					),
				},
				{
					path: '/admin',
					element: (
						<ProtectRoutes userInfo={userInfo} defineRoles={['admin']}>
							<Admin />
						</ProtectRoutes>
					),
				},
			],
		},
		{path: '*', element: <Navigate to="/" replace />},
	]);

	return (
		<>
			<RouterProvider router={router} />
			<ToastProvider />
		</>
	);
};

export default App;
