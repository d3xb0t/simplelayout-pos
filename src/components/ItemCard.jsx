/**
 * [Core]
 */
import React, { lazy, Suspense } from "react"
import { ErrorBoundary } from 'react-error-boundary'

/**
 * [Componentes]
 */
import { CustomButton } from "./CustomButton"


/**
 * [Assets]
 */
import styles from '../assets/styles/AppStyles.module.css'

/**
 * [Lazy]
 */
const Button = lazy(() => import('@mui/material/Button'))
const CircularProgress = lazy(() => import('@mui/material/CircularProgress'))
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useDispatch } from "react-redux"

// 2. Fallback para errores
const ErrorFallback = ({ error, resetErrorBoundary }) => (
    <div className={styles.errorContainer}>
        <p>Failed to load component</p>
        <button onClick={resetErrorBoundary}>Retry</button>
    </div>
);

const LoadingSpinner = () => <div className={styles.spinner}>Loading...</div>;

const ItemCard = ({ item }) => {
    const dispatch = useDispatch()
    function addToCart(){
        dispatch({type: 'addToCart', payload: item})
    }
    return (
        <article className={styles.card}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <img src={item.imageUrl} alt={`Imagen ${item.name}`} />
                <h4>{item.name}</h4>
                <p>Price {item.price}$</p>
                <div className={styles.buttonContainer}>
                    <Suspense fallback={<LoadingSpinner />}>
                        <CustomButton onClick={() => addToCart()} startIcon={<AddShoppingCartIcon />}><h5>Agregar</h5></CustomButton>
                    </Suspense>
                </div>
            </ErrorBoundary>
        </article>
    )
}

export default ItemCard
