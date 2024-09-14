import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAdminLoggedIn }) => {
    if (!isAdminLoggedIn) {
        return <Navigate to="/sign-in" />;
    }
    return element;
};

export default ProtectedRoute;
