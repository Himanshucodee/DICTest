import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#fff', boxShadow: 'none' }}>
        <Grid container spacing={2}>
          <Grid size={6} style={{ textAlign: 'center' }}>
            <Input
              id="search"
              type={'text'}
              label='Search Text'
              style={{ margin: '0 auto', border: '1px solid #DFE0E2', padding: '8px 5px'}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"

                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid size={3}>
            <NotificationsIcon style={{ float: 'right', position: 'relative', top: '20px' }} alt=""/>
          </Grid>
          <Grid size={3}>
            <Avatar style={{ float: 'right', position: 'relative', top: '20px' }} alt=""/>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}