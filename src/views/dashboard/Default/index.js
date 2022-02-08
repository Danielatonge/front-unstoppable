import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import PopularCard from './PopularCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <MainCard>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-between">
                                        <Grid item />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} />
                            </Grid>
                        </MainCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <MainCard>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-between">
                                        <Grid item />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} />
                            </Grid>
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
