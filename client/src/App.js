import { AppProvider } from 'providers/app';
import { AppRoutes } from 'routes';
import { Dashboard } from 'pages/dashboard';
import { Routes, Route } from 'react-router-dom';
import { useCart } from 'features/carts/provider/CartProviders';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
