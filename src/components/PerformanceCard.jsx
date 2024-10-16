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
import CameraIcon from '@mui/icons-material/Camera';

function PerformanceCard({src, HWP, rating, salesData,currentData }) {
  console.log("currentData",src,"HWP",currentData.HWP);
  
  return (
    <div className="flex flex-col w-[150px] p-4 bg-[#4b4f55] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Top section with logo and label */}
      <div className="mx-auto ">
        {/* Logo or icon */}
        <div className=" bg-gray-100 p-2 rounded-full">
          {/* Placeholder for the actual icon */}
          <img src={currentData.src} alt="Logo" className="h-6 w-6" />
        </div>
        {/* Top Performer label */}
        
      </div>

      {/* Rating section */}
      {/* <div className="mt-3 text-gray-800">
        <p className="flex items-center text-xs">
          <span className="text-gray-500">Rating:</span>
          <span className="ml-1 text-yellow-500">★★★★☆</span>
        </p>
      </div> */}

      {/* Sales information */}
      <div className="mt-4 text-white">
        <div className="flex justify-between items-center">
          <div className="text-xs ">HWP</div>
          <div className="text-sm font-medium">{currentData.HWP} </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="text-xs ">MU</div>
          <div className="text-sm font-medium">{(currentData.salesData[0]).profit} </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="text-xs ">Dark Hours</div>
          <div className="text-sm font-medium">{(currentData.salesData[0]).contribution}</div>
        </div>
      </div>

      {/* Total sales info */}
      <div className="flex justify-center mt-4">
        <div className="bg-gray-200  text-center py-2 rounded-lg w-full">
          <p className="text-xs font-semibold">{(currentData.salesData[0]).Grossprofit}</p>
          <p className="text-xs">Gross Profit</p>
        </div>
      </div>
    </div>
  );
}

export default PerformanceCard;
