/**
 * [Core]
 */
import React, { useState } from 'react'

/**
 * [Assets]
 */
import styles from '../../assets/styles/AppStyles.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ListIcon from '@mui/icons-material/List'
import IconButton from '@mui/material/IconButton'
import Badge, {badgeClasses} from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
        top: -12px;
        right: -6px;
}
`

const ControlContainer = () => {
    const [cartItems, setCartItems] = useState(2)
    return (
        <div className={styles.controls}>
            <IconButton className={styles.controlButton} aria-label="List view">
                <ListIcon fontSize='small' />
            </IconButton>
            <IconButton className={styles.controlButton} aria-label="Shopping cart">
                <ShoppingCartIcon fontSize="small" />
                <CartBadge badgeContent={2} color="primary" overlap="circular" />
            </IconButton>
        </div>
    )
}

export default ControlContainer