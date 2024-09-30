import ViewTabs from './ViewTabs';
import MenuStepper from './MenuStepper';
import Typography from '@mui/material/Typography';

function Shell() {
    return (
        <div className="App">
            <MenuStepper />
            <Typography variant="h4" style={{margin : '20px 0', fontWeight: '600'}}>
                Highway Operation Management
            </Typography>
            <ViewTabs />
        </div>
    );
}

export default Shell;
