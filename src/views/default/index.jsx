import video from "src/video/video.mp4";

const Dashboard = ({ Iframe ,isFullscreen,setIsFullscreen}) => {
  console.log(isFullscreen,"isfullscreen");
  
  return (
    <div className="relative p-2 overflow-hidden">
      <video
        src={video}
        autoPlay
         muted
        className="absolute inset-0 w-full h-screen object-cover z-0 opacity-[0.5]"
      />
     
     {!isFullscreen ?( <div className="relative z-10 mix-blend-screen"> <iframe 
          src={Iframe} 
          width="1010" 
          height="1248" 
          marginHeight="0" 
          marginWidth="0" 
          frameBorder="0" 
          
         
        ></iframe>
        </div>):( <div className="relative z-10 mix-blend-screen mt-10"><iframe 
          src={Iframe} 
          width="1150" 
          height="1248" 
          marginHeight="0" 
          marginWidth="0" 
          frameBorder="0" 
          
         
        ></iframe></div>)}
      

      
    </div>
  );
};

export default Dashboard;
