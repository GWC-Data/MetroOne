
import WeeklyRevenue from "src/views/default/components/WeeklyRevenue";
import TotalSpent from "src/views/default/components/TotalSpent";
import PieChartCard from "src/views/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "src/components/widget/Widget";
import CheckTable from "src/views/default/components/CheckTable";
import ComplexTable from "src/views/default/components/ComplexTable";
import DailyTraffic from "src/views/default/components/DailyTraffic";
import TaskCard from "src/views/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = ({ HWC, total_customers, MU_wOT, MU_Dedicated, Fill_Rate, NBOT, PR, Gross, total_payroll, Revenue, COST_of_OT, gross_profit, Region_Dedicated, LOCATION_by_REVENUE, GP_vs_GP, Dark_Hours, HPW_by_STATE, PL_Dedicated, TOTAL_PAYROLL_vs_TOTAL_BILLED, Region_wise_dedicated_summary }) => {
  return (
    <div className="p-2">

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8">
          <div className="grid grid-cols-4 gap-2">
            <div className="mt-2 bg-white">
              <h1 className="relative z-70 text-black left-2 font-bold text-2xl">HPW</h1>
              {HWC}
            </div>
            <div className="mt-2 bg-white">
              <h1 className="relative z-70 text-black left-2 font-bold text-2xl">Total Customer</h1>
              {total_customers}
            </div>
            <div className="mt-2 bg-white">
              <h1 className="relative z-70 text-black left-2 font-bold text-2xl">MU w/OT</h1>
              {MU_wOT}
            </div>
            <div className="mt-2 bg-white">
              <h1 className="relative z-70 text-black left-2 font-bold text-2xl">MU</h1>
              {MU_Dedicated}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="mt-2 bg-white">
              <h1 className="relative z-70 text-black left-2 font-bold text-2xl">Fill_Rate</h1>
              {Fill_Rate}
            </div>
            <div className="mt-2 bg-white">
              <h1 className="relative z-70 text-black left-2 font-bold text-2xl">NBOT</h1>
              {NBOT}
            </div>
            <div className="mt-2 bg-white">
              <h1 className="relative z-70 text-black left-2 font-bold text-2xl">PR</h1>
              {PR}
            </div>
            <div className="mt-2 bg-white">
              <h1 className="relative z-70 text-black left-2 font-bold text-2xl">Gross Profit %</h1>
              {Gross}
            </div>

          </div>

        </div>
        <div className="col-span-4">
          <div className="mt-2 bg-white">
            <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">Total Payroll</h1>
            {total_payroll}
          </div>
          <div className="mt-2 bg-white">
            <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">Revenue</h1>
            {Revenue}
          </div>
          <div className="mt-2 bg-white">
            <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">Cost of OT</h1>
            {COST_of_OT}
          </div>
          <div className="mt-2 bg-white">
            <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">Gross Profit</h1>
            {gross_profit}
          </div>
        </div>
      </div>
      <div className="mt-2 bg-white">
        <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">Top 10 Customer By all Region</h1>
        {Region_Dedicated}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="mt-2 bg-white">
          <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">TOP 10 LOCATION by REVENUE</h1>
          {LOCATION_by_REVENUE}
        </div>
        <div className="mt-2 bg-white">
          <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">GP_vs_GP %</h1>
          {GP_vs_GP}
        </div>
        <div className="mt-2 bg-white">
          <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">Dark Hours</h1>
          {Dark_Hours}
        </div>
        <div className="mt-2 bg-white">
          <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">HPW_by_STATE</h1>
          {HPW_by_STATE}
        </div>
      </div>
      <div className="mt-2 bg-white">
        <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">P&L</h1>
        {PL_Dedicated}
      </div>
      <div className="mt-2 bg-white">
        <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">TOTAL PAYROLL vs TOTAL BILLED</h1>
        {TOTAL_PAYROLL_vs_TOTAL_BILLED}
      </div>
      <div className="mt-2 bg-white">
        <h1 className="relative z-70 text-black left-2 font-bold text-2xl bg-white">Region wise dedicated summary</h1>
        {Region_wise_dedicated_summary}
      </div>

    </div>
  );
};

export default Dashboard;
