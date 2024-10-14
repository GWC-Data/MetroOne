import React from 'react';
import Bardataset from './Line1';
import HorizontalBars from './Line2';
import GridDemo from './Bar3/Bar3';
import PieArcLabel from './Pie4/pie4';
import PerformanceCard from '../PerformanceCard';
import { Scrollbar } from '../scrollbar/Scrollbar';
import { NumberTickerDemo } from '../Number';

import { RetroGridDemo } from '../Retrogrid';
import { PieShadcn } from './PieShadcn';

const Dashboard = () => {
  return (
    <div className="p-8 bg-gray-800 text-white ">

      
      <div className="grid grid-rows-4 gap-4">
      <div className="col-span-1 p-4 w-64  rounded-lg flex items-center bg-gradient-to-r from-purple-500 to-purple-900">
          {/* <h2 className="text-lg font-bold">Total Sales</h2>
          <p className="text-2xl">193.3 Cr</p> */}
          <Scrollbar />
        </div>
       
        
        <div className="col-span-1 p-4 bg-gray-700 rounded-lg bg-gradient-to-r from-purple-500 to-purple-900">
          <h2 className="text-lg font-bold">HPW</h2>
          <p className="text-2xl">193.3 Cr</p>
          <Bardataset />
        </div>
        <div className="col-span-2 p-4 bg-gradient-to-r from-purple-500 to-purple-900 rounded-lg">
          <h2 className="text-lg font-bold">Enquiries</h2>
          <p className="text-xl">347</p>
          <RetroGridDemo/>
          
        </div>
        
        
        <div className="col-span-2 p-4 bg-gradient-to-r from-purple-500 to-purple-900 rounded-lg">
          <h2 className="text-lg font-bold">Total Profit</h2>
          <p className="text-2xl">65.1 Cr</p>
          {/* <Bardataset />  */}
          <PieShadcn/>
        </div>
        <div className="col-span-2 p-4 h-64 pl-[38%] bg-gradient-to-r  from-purple-500 to-purple-900 rounded-lg flex items-center">
          {/* <h2 className="text-lg font-bold">Vehicle Qty</h2>
          <p className="text-2xl">964</p> */}
         <NumberTickerDemo />
        </div>
        
        <div className="col-span-1 p-4 bg-gray-700 rounded-lg">
          <h2 className="text-lg font-bold">Sale Target</h2>
          <p className="text-2xl">116.7 Cr</p>
          {/* <PieShadcn/> */}
        </div>
        
      

        
   
        
        <div className="col-span-2 p-4 bg-gray-700 rounded-lg">
          <h2 className="text-lg font-bold">Target Sales</h2>
          <HorizontalBars /> 
        </div>

        
        <div className="col-span-1 p-4 bg-gray-700 rounded-lg">
          <h2 className="text-lg font-bold">Sales Mode</h2>
          <div className="flex">
            <div className="mr-4">
              <span className="block text-green-400">Online: 33</span>
              <span className="block text-red-400">Offline: 116</span>
            </div>
          </div>
        </div>

       
        <div className="col-span-2 p-4 bg-gray-700 rounded-lg bg-gradient-to-r from-purple-500 to-purple-900">
          <h2 className="text-lg font-bold">Region</h2>
          <PieArcLabel /> 
        </div>

        <div className="col-span-2 p-4 bg-gray-700 rounded-lg">
          <h2 className="text-lg font-bold">Vehicle Type</h2>
          {/* <PieArcLabel />  */}
          <PieShadcn/>
        </div>

       
        <div className="col-span-4 p-4 bg-gray-700 rounded-lg">
          <h2 className="text-lg font-bold">Sales - Top 5 Locations</h2>
          <GridDemo />
        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;
