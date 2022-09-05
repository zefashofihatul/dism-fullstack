import { AppProvider } from 'providers/app';
import { AppRoutes } from 'routes';
import { Dashboard } from 'pages/dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
