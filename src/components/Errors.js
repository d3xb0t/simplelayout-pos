const ErrorIcon = lazy(() => import('@mui/icons-material/Error'))

export const ErrorFallback = ({ error }) => (
    <div className={styles.error}>
        <ErrorIcon />
    </div>
);