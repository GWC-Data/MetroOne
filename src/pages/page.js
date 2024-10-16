import Slides from "../components/region/regionView";
const { Scrollbar } = require("../components/scrollbar/Scrollbar");

export const IndexPageView = ({activeSlide,setActiveSlide,isFullscreen ,setIsFullscreen}) => {
    return (
        <>
            <div className="flex  ">
                <div className="col-span-3 bg-[#4b4f55] z-300 w-[200px]">
                    <Scrollbar />
                </div>
                <div className="col-span-9 bg-gray-600 w-full"> 
                    <Slides activeSlide={activeSlide} setActiveSlide={setActiveSlide}  isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} />
                </div>
            </div>
        </>
    );
};
