import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { SCREENS } from 'src/common/constants/screens';

export /**
 * For a Private Route
 *
 * @param {*} { element: Component, ...rest }
 * @return {*}
 */
const PrivateComponent = ({ element: Component, ...rest }: any) => {
  let loginStatus: boolean = true;
  const { pathname } = useLocation();

  // Redirect to other screen if the condition is not true
  return loginStatus ? <Outlet /> : <Navigate to={SCREENS.LOGIN()} state={{ from: pathname }} replace />;
};
