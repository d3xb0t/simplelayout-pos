import { Button } from '@mui/material';
import React from 'react';

const buttonStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '8px 16px',
    textTransform: 'none',
    fontWeight: 500,
    letterSpacing: '0.5px',
    borderRadius: '4px',
    minHeight: '40px',
    '&:hover': {
        backgroundColor: 'rgba(25, 118, 210, 0.08)'
    },
    '&.Mui-selected': {
        backgroundColor: 'rgba(25, 118, 210, 0.1)',
        borderLeft: '3px solid #1976d2'
    },
    fontSize: '0.875rem',
    lineHeight: '1.25',
};

export const CustomButton = ({ children, ...props }) => {
    return (
        <Button
            fullWidth
            variant="outlined"
            size="medium"
            sx={buttonStyles}
            {...props}
        >
            {children}
        </Button>
    );
};