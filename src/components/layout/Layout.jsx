/**
 * [Core]
 */
import React, { lazy, useState, memo, Suspense, useMemo, useEffect, useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress'
import { ErrorBoundary } from 'react-error-boundary';

/**
 * [Jerarquía de componentes]
 */
import ControlContainer from '../containers/ControlContainer'
import ItemsContainer from '../containers/ItemsContainer'
import { CustomButton } from '../CustomButton'

/**
 * [Assets]
 */
import styles from '../../assets/styles/AppStyles.module.css'

/**
 * [Carga lazy de iconos]
 */
const HomeIcon = lazy(() => import('@mui/icons-material/Home'));
const PaidIcon = lazy(() => import('@mui/icons-material/Paid'))
const FormatListNumberedIcon = lazy(() => import('@mui/icons-material/FormatListNumbered'))
const LogoutIcon = lazy(() => import('@mui/icons-material/Logout'))
const PersonIcon = lazy(() => import('@mui/icons-material/Person'))

const Layout = () => {
    const [nav, setNav] = useState(true)
    const [items, setItems] = useState([])
    console.log(items)
    const SIDEBAR_BUTTONS = [
        { label: "Home", icon: <HomeIcon />, aria: "Home" },
        { label: "Bills", icon: <PaidIcon />, aria: "Bills" },
        { label: "Items", icon: <FormatListNumberedIcon />, aria: "Items" },
        { label: "Customers", icon: <PersonIcon />, aria: "Customers" },
        { label: "Logout", icon: <LogoutIcon />, aria: "Logout" }
    ]

    const getItemsFromServer = useCallback(async () => {
        try {
            
            await fetch('http://localhost:8080/api/v1/get-items')
            .then(response => response.json())
            .then(json => setItems(json))
            
        } catch (err) {
            console.error(err.message)
        }
    }, [])

    useEffect(() => {
        getItemsFromServer()
    }, [getItemsFromServer])
    return (
        <div className={styles.layout}>
            <aside className={`${styles.sideBar} ${!nav && styles.hidden}`}>
                <nav className={styles.navbar} >
                    {
                        SIDEBAR_BUTTONS.map((button, index) => (
                            <ErrorBoundary key={button.label}
                                fallback={<div>⚠️ An error has occurred</div>}
                            >
                                <Suspense fallback={<CircularProgress size={20} />}>
                                    <CustomButton
                                        startIcon={button.icon}
                                        aria-label={button.aria}
                                    >{button.label}</CustomButton>
                                </Suspense>
                            </ErrorBoundary>
                        ))
                    }
                </nav>
            </aside>

            <main className={`${styles.dashBoard} ${!nav && styles.expanded}`}>
                <section className={styles.controlContainer}>
                    <ControlContainer setNav={setNav} />
                </section>

                <article className={styles.itemsContainer}>
                    <ItemsContainer />
                </article>
            </main>
        </div>
    )
}

export default Layout