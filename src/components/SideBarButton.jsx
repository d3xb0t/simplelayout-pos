import { memo, Suspense } from "react"
import CircularProgress from '@mui/material/CircularProgress'
import { CustomButton } from "./CustomButton"

const SideBarButton = memo(({ icon, label, aria }) => (
    <Suspense fallback={<CircularProgress size={20} />}>
        <CustomButton startIcon={icon} aria-label={aria}>{label}</CustomButton>
    </Suspense>
))

export default SideBarButton