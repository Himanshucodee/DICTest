import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            <HomeIcon />
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Highway Operation Management
        </Link>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            Inspections
        </Typography>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            Joint Inspections
        </Typography>
    ];

    return (
        <Stack spacing={2}  style={{margin : '20px 0'}}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    );
}
