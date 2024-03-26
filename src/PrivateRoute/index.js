import { useNavigate } from 'react-router-dom';
import {useQuery} from "react-query";
import {VALIDATE_URL} from "../auth/backendConfig";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const { isLoading, error } = useQuery('repoData', () =>
        fetch(VALIDATE_URL, {
            method: 'POST',
            headers: {'Authorization': `Bearer ${token}`}
        }).then(res => {
            if (!res.ok) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        })
    );

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return children;
}

export default PrivateRoute;