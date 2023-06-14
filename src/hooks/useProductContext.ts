import {useContext} from 'react';
// project import
import {ProductContext} from '@contexts/ProductContext';

export const useProductContext = () => useContext(ProductContext);
