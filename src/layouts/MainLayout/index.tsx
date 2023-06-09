import {Outlet} from 'react-router-dom';
// project import
import Header from '@components/Header';
import {MainLayoutChild, MainLayoutWrapper} from './styles';

const MainLayout = () => {
	return (
		<MainLayoutWrapper>
			<Header />
			<MainLayoutChild>
				<Outlet />
			</MainLayoutChild>
		</MainLayoutWrapper>
	);
};

export default MainLayout;
