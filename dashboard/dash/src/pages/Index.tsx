
import { Navigate } from 'react-router-dom';

// Redirect to the Dashboard from the index route
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
