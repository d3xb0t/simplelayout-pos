/**
 * [Core]
 */
import React, { lazy, useState, memo, Suspense, useMemo, useEffect, useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress'
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';


/**
 * [Jerarquía de componentes]
 */
import ControlContainer from '../containers/ControlContainer'
import ItemsContainer from '../containers/ItemsContainer'
import { CustomButton } from '../CustomButton'
import SideBarButton from '../SideBarButton'

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
    const [state, setState] = React.useState({
        itemsCollection: [],
        systemStatus: {
            isLoading: true,
            lastError: null,
            requestCount: 0
        }
    });

    const SIDEBAR_BUTTONS = [
        { label: "Home", icon: <HomeIcon />, aria: "Home" },
        { label: "Bills", icon: <PaidIcon />, aria: "Bills" },
        { label: "Items", icon: <FormatListNumberedIcon />, aria: "Items" },
        { label: "Customers", icon: <PersonIcon />, aria: "Customers" },
        { label: "Logout", icon: <LogoutIcon />, aria: "Logout" }
    ]

    const getItemsFromServer = useCallback(async () => {
        const abortController = new AbortController();

        try {
            setState(prev => ({
                ...prev,
                systemStatus: {
                    ...prev.systemStatus,
                    isLoading: true,
                    lastError: null
                }
            }));

            const response = await fetch('http://localhost:8080/api/v1/get-items', {
                signal: abortController.signal
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();

            if (!abortController.signal.aborted) {
                setState(prev => ({
                    itemsCollection: json.data,
                    systemStatus: {
                        ...prev.systemStatus,
                        isLoading: false,
                        requestCount: prev.systemStatus.requestCount + 1
                    }
                }));
            }

        } catch (err) {
            if (err.name !== 'AbortError') {
                setState(prev => ({
                    ...prev,
                    systemStatus: {
                        ...prev.systemStatus,
                        isLoading: false,
                        lastError: err.message
                    }
                }));
            }
        }

        return abortController;
    }, []);

    useEffect(() => {
        const abortController = getItemsFromServer();

        return () => {
            if (abortController instanceof AbortController) {
                abortController.abort();
            }
        };
    }, [getItemsFromServer]);
    return (
        <div className={styles.layout}>
            <aside className={`${styles.sideBar} ${!nav && styles.hidden}`}>
                <nav className={styles.navbar} >
                    {
                        SIDEBAR_BUTTONS.map((button, index) => (
                            <ErrorBoundary key={button.label}
                                fallback={<div>⚠️ An error has occurred</div>}
                            >
                                <SideBarButton icon={button.icon} label={button.label} aria={button.aria}/>
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
                    <ItemsContainer>{state.itemsCollection}</ItemsContainer>
                </article>
            </main>
        </div>
    )
}

export default Layout