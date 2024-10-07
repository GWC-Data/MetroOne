import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

function PerformanceCard({ totalSales, rating, salesData }) {
  return (
    <Card sx={{ maxWidth: 400, padding: 2,  backgroundImage: ` linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)`,
       
    }} >
      <CardContent style={{ color: 'white' }}>
        <div className="top-performer" style={{ display: 'flex', alignItems: 'center', marginBottom: '16px',color:'white' }}>
          <Button variant="contained" color="primary" style={{ marginRight: '8px' }}>
            ▶
          </Button>
          {/* <Typography variant="h6">Top Performer</Typography> */}
          <Typography variant="h4">{totalSales}</Typography>
        </div>

        <div className="total-sales" style={{ marginBottom: '16px' }}>
         
          <Typography variant="body2">Total Sales</Typography>
        </div>

        <div className="rating" style={{ marginBottom: '16px' }}>
          <Typography variant="body1">{rating}/5</Typography>
          <div className="stars" style={{ display: 'flex' ,justifyContent:'center'}}>
            {[...Array(Math.floor(rating))].map((_, index) => (
              <span key={index} style={{ color: 'gold' }}>
                ★
              </span>
            ))}
            {[...Array(5 - Math.floor(rating))].map((_, index) => (
              <span key={index} style={{ color: 'lightgray' }}>
                ☆
              </span>
            ))}
          </div>
        </div>

        <TableContainer>
          <Table sx={{ color: 'white' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>Sales</TableCell>
                <TableCell sx={{ color: 'white' }}>Profit</TableCell>
                <TableCell sx={{ color: 'white' }}>Contribution</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ color: 'white' }}>
              {salesData.map((data, index) => (
                <TableRow key={index} sx={{ color: 'white' }} >
                  <TableCell sx={{ color: 'white' }}>{data.sales}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{data.profit}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{data.contribution}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default PerformanceCard;
