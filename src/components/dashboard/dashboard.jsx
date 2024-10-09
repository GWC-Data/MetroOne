import React from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import { PieChart, Pie } from 'recharts';

const DashboardRoyal = () => {
    const pieChartData = [
        { name: 'Region 1', value: 36.9 },
        { name: 'Region 2', value: 39 },
        { name: 'Region 3', value: 16.3 },
        { name: 'Region 4', value: 7.8 },
    ];

    return (
        <Box padding={1} 
            style={{
                backgroundImage: `url('https://metroonelpsg.com/wp-content/uploads/2022/01/Metro_badge_website2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                color: 'white',
            }}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Card style={{ backgroundColor: 'gray', padding: 2 }}>
                        <Typography>Total Sales: 193.3 Cr</Typography>
                    </Card>
                </Grid>
                
                <Grid item xs={3}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Card style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}>
                                <Typography>Sale Target: 116.7 Cr</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}>
                                <Typography>Sale Target: 116.7 Cr</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Card style={{ backgroundColor: 'gray' }}>
                        <Typography>Total Sales: 193.3 Cr</Typography>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card style={{ backgroundColor: 'gray' }}>
                        <Typography>Region</Typography>
                        <PieChart width={400} height={285}>
                            <Pie data={pieChartData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label />
                        </PieChart>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card style={{ backgroundColor: 'gray' }}>
                        <Typography>Vehicle Type</Typography>
                        <PieChart width={400} height={285}>
                            <Pie data={pieChartData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" label />
                        </PieChart>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Card style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}>
                                <Typography>Sale Target: 116.7 Cr</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={8}>
                                    <Card style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}>
                                        <Typography>Sale Target: 116.7 Cr</Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}>
                                        <Typography>Sale Target: 116.7 Cr</Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardRoyal;
