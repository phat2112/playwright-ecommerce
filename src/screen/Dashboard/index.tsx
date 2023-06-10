import {Outlet} from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			Dashboard
			<br />
			-----
			<br />
			<Outlet />
		</div>
	);
};

export default Dashboard;
