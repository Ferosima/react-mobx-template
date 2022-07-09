import { Navigate, useLocation } from 'react-router-dom';
import { SCREENS } from 'src/common/constants/screens';

export /**
 * For a Private Route
 *
 * @param {*} { element: Component, ...rest }
 * @return {*}
 */
const RequireAuth = ({ element: Component, ...rest }: any) => {
  let auth: any = {};
  let location = useLocation();

  // Redirect to other screen if the condition is not true
  if (!auth?.user) {
    return <Navigate to={SCREENS.LOGIN()} state={{ from: location }} />;
  }
  return null;
};
