import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const temp = {
    background: '#F4F5F5',
    color: '#313033',
    borderBottom: 'none'
}

export default function InnerTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                >
                    <Tab label="Joint Inspections" style={value === 0 ? temp : null} {...a11yProps(0)} />
                    <Tab label="General Inspections" style={value === 1 ? temp : null}  {...a11yProps(1)} />
                    <Tab label="RFIs" style={value === 2 ? temp : null} {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Grid container spacing={2}>
                    <Grid size={3} style={{ textAlign: 'center' }}>
                        <Card style={{borderLeft: '4px solid #BFC1C5'}}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: '#313033', fontSize: 16, fontWeight: 600, textAlign: 'left' }}>
                                    Pending Inspections
                                </Typography>
                                <Typography sx={{ color: '#61646B', mb: 1.5, fontSize: 24, textAlign: 'left', fontWeight: 600 }}>03</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={3} style={{ textAlign: 'center' }}>
                        <Card style={{borderLeft: '4px solid #BFC1C5'}}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: '#313033', fontSize: 16, fontWeight: 600, textAlign: 'left' }}>
                                    Inscepction This Week
                                </Typography>
                                <Typography sx={{ color: '#61646B', mb: 1.5, fontSize: 24, textAlign: 'left', fontWeight: 600 }}>01</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={3} style={{ textAlign: 'center' }}>
                        <Card style={{borderLeft: '4px solid #BFC1C5'}}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: '#313033', fontSize: 16, fontWeight: 600, textAlign: 'left' }}>
                                    Missed Inspections
                                </Typography>
                                <Typography sx={{ color: '#61646B', mb: 1.5, fontSize: 24, textAlign: 'left', fontWeight: 600 }}>03</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={3} style={{ textAlign: 'center' }}>
                        <Card style={{borderLeft: '4px solid #BFC1C5'}}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: '#313033', fontSize: 16, textAlign: 'left', fontWeight: 600 }}>
                                    Discrepancies
                                </Typography>
                                <Typography sx={{ color: '#61646B', mb: 1.5, fontSize: 24, textAlign: 'left', fontWeight: 600 }}>00</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
            </CustomTabPanel>
        </Box>
    );
}

