import {useContext} from 'react';
// project import
import {AuthContext} from '@contexts/AuthContext';

export const useAuthContext = () => useContext(AuthContext);
