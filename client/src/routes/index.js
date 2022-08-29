import { useRoutes } from 'react-router-dom';
import { Landing } from 'pages/landing-page';

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
