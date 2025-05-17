/**
 * [Core]
 */
import React, { lazy, useState, memo } from 'react';

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

const SIDEBAR_BUTTONS = [
    { label: "Home", icon: <HomeIcon />, aria: "Home" },
    { label: "Bills", icon: <PaidIcon />, aria: "Bills" },
    { label: "Items", icon: <FormatListNumberedIcon />, aria: "Items" },
    { label: "Customers", icon: <PersonIcon />, aria: "Customers" },
    { label: "Logout", icon: <LogoutIcon />, aria: "Logout" }
]

const Layout = () => {
    const [nav, setNav] = useState(true)
    return (
        <div className={styles.layout}>
            <aside className={`${styles.sideBar} ${!nav && styles.hidden}`}>
                <nav className={styles.navbar} >
                    {
                        SIDEBAR_BUTTONS.map((button) => (
                            <CustomButton
                                key={button.label}
                                startIcon={button.icon}
                                aria-label={button.aria}
                            >{button.label}</CustomButton>
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