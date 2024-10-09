import Card from "src/components/card";


const Widget = ({ iframe }) => {
  return (
    <Card extra="!flex-row flex-grow bg-[#2a3642] items-center rounded-[20px] ">
      {/* <div className="ml-[18px] flex h-[90px] w-auto  flex-row items-center">
        
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white text-gray-200 text-2xl">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center ">
        <p className="font-dm text-sm font-medium text-gray-300">{title}</p>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white text-gray-200">
          {subtitle}
        </h4>
      </div> */}
      
      <div className="ml-[18px] flex h-[90px] w-auto  flex-row items-center">
        
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white text-gray-200 text-2xl">
            {iframe}
          </span>
        </div>
      </div>

    </Card>
  );
};

export default Widget;
