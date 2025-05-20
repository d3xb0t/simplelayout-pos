/**
 * [Core]
 */
import React, { lazy, useState, memo, Suspense } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { ErrorBoundary } from 'react-error-boundary'
import { useSelector } from 'react-redux'

/**
 * [Assets]
 */
import styles from '../../assets/styles/AppStyles.module.css'
import Badge, { badgeClasses } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

const ShoppingCartIcon = lazy(() => import('@mui/icons-material/ShoppingCart'))
const ListIcon = lazy(() => import('@mui/icons-material/List'))
const IconButton = lazy(() => import('@mui/material/IconButton'))


const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
        top: -12px;
        right: -6px;
}
`

const ControlContainer = ({ setNav }) => {
    const cartItems = useSelector(state => state.root.cartItems)
    return (
        <div className={styles.controls}>
            <ErrorBoundary
                fallback={<div>⚠️ An error has occurred</div>}
            >
                <Suspense fallback={<CircularProgress size={20} />}>
                    <IconButton className={styles.controlButton} aria-label="List view"
                        onClick={() => setNav(prev => !prev)}
                    >
                        <ListIcon fontSize='small' />
                    </IconButton>
                </Suspense>
            </ErrorBoundary>
            <ErrorBoundary
                fallback={<div>⚠️ An error has occurred</div>}
            >
                <Suspense fallback={<CircularProgress size={20} />}>
                    <IconButton className={styles.controlButton} aria-label="Shopping cart">
                        <ShoppingCartIcon fontSize="small" />
                        <CartBadge badgeContent={cartItems.length} color="primary" overlap="circular" />
                    </IconButton>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default ControlContainer