/**
 * [Core]
 */
import { lazy } from 'react'

/**
 * [Carga lazy de iconos]
 */
const HomeIcon = lazy(() => import('@mui/icons-material/Home'));
const PaidIcon = lazy(() => import('@mui/icons-material/Paid'))
const FormatListNumberedIcon = lazy(() => import('@mui/icons-material/FormatListNumbered'))
const LogoutIcon = lazy(() => import('@mui/icons-material/Logout'))
const PersonIcon = lazy(() => import('@mui/icons-material/Person'))

export const SIDEBAR_BUTTONS = [
    { label: "Home", icon: HomeIcon, aria: "Home" },
    { label: "Bills", icon: PaidIcon, aria: "Bills" },
    { label: "Items", icon: FormatListNumberedIcon, aria: "Items" },
    { label: "Customers", icon: PersonIcon, aria: "Customers" },
    { label: "Logout", icon: LogoutIcon, aria: "Logout" }
]