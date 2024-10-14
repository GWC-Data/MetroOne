import React, { useState } from 'react';
import { Grid, Card, Typography, Box, Grid2 } from '@mui/material';
import { PieChart, Pie, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Scrollbar } from '../scrollbar/Scrollbar';


import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PerformanceCard from '../PerformanceCard';

const Dashboard = () => {
    // Example Data
    const lineChartData = [
        { name: 'Year 1', value: 100 },
        { name: 'Year 2', value: 200 },
        { name: 'Year 3', value: 150 },
        { name: 'Year 4', value: 250 },
    ];

    const pieChartData = [
        { name: 'Region 1', value: 36.9 },
        { name: 'Region 2', value: 39 },
        { name: 'Region 3', value: 16.3 },
        { name: 'Region 4', value: 7.8 },
    ];

    const barChartData = [
        { name: 'Jan', target: 40, sales: 30 },
        { name: 'Feb', target: 50, sales: 45 },
        { name: 'Mar', target: 60, sales: 50 },
    ];

    return (
        <Box padding={1} 
        style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_rtmUWdTnqaINPfEqXHtsEFTtRy2DsZNOA&s')`, // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            color: 'white', // Optional: Change text color for better visibility
        }}>
            <Grid container spacing={1} xs={12} lg={12}>
                {/* Bullet 350 Header */}
                <Grid item xs={12}>
                    {/* <Typography variant="h4">Bullet 350</Typography> */}
                </Grid>

                {/* Total Sales, Profit, Target */}
                <Grid item xs={3} style={{ width: '250px', height: '150px', padding: 2, }}>
                  
                <Card style={{ backgroundColor:'gray'}}>
                        <Typography>Total Sales: 193.3 Cr</Typography>
                        {/* <Scrollbar /> */}
                    </Card>
             
                </Grid>
                <Grid item xs={3} style={{ width: '250px', height: '150px', padding: 2 }}>
                    <Card style={{ backgroundColor:'gray'}}>
                        {/* <Typography>Total Sales: 193.3 Cr</Typography> */}
                        {/* <Scrollbar /> */}
                        <iframe src="https://gwcteq-partner.domo.com/embed/card/private/YW0oY" width="600" height="150" marginheight="0" marginwidth="0" frameborder="0" className='bg-transparent'></iframe>
                    </Card>
                </Grid>

                <Grid item xs={3} >
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Card style={{ height: '60px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'gray' }}>
                                <Typography>Sale Target: 116.7 Cr</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} >
                            <Card style={{ height: '60px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'gray' }}>
                                <Typography>Sale Target: 116.7 Cr</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={3}  spacing={1} style={{ width: '250px', height: '150px', padding: 2 }}>
                <Card style={{ backgroundColor:'gray'}}>
                        <Typography>Total Sales: 193.3 Cr</Typography>

                        <Scrollbar />




                    </Card>
                </Grid>

                {/* Pie Chart for Region */}
                <Grid item xs={3} style={{ width: '200px', padding: 2 }}>
                <Card style={{ backgroundColor:'gray'}}>
                        <Typography>Region</Typography>
                        <PieChart width={400} height={285}>
                            <Pie data={pieChartData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label />
                        </PieChart>
                    </Card>
                </Grid>

                {/* Vehicle Type Pie Chart */}
                <Grid item xs={3}>
                <Card style={{ backgroundColor:'gray'}}>
                        <Typography>Vehicle Type</Typography>
                        <PieChart width={400} height={285}>
                            <Pie data={pieChartData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" label />
                        </PieChart>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Card style={{ height: '150px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' ,backgroundColor:'gray'}}>
                                <Typography>Sale Target: 116.7 Cr</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1} direction="row">
                                <Grid item xs={8}>
                                    <Card style={{ height: '150px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' ,backgroundColor:'gray'}}>
                                        <Typography>Sale Target: 116.7 Cr</Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card style={{ height: '150px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' ,backgroundColor:'gray'}}>
                                        <Typography>Sale Target: 116.7 Cr</Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                {/* Bar Chart for Target vs Sales */}
                {/* <Grid item xs={6}>
                    <Card sx={{ width: '100%', height: '500px', padding: 2 }}>
                        <Typography>Target vs Sales</Typography>

                        <iframe src="https://gwcteq-partner.domo.com/embed/card/private/K1mK8" width="600" height="500" marginheight="0" marginwidth="0" frameborder="0"
                            className='ml-[20%]' ></iframe>
                    </Card>
                </Grid> */}
                

            
            </Grid>
        </Box>
    );
};

export default Dashboard;
