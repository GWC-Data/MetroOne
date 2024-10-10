import video from "src/video/video.mp4";

const Dashboard = ({ Iframe }) => {
  return (
    <div className="relative p-2 overflow-hidden">
      <video
        src={video}
        autoPlay
         muted
        className="absolute inset-0 w-full h-screen object-cover z-0 opacity-[0.5]"
      />
      <div className="relative z-10 mix-blend-screen -mt-[70px]">
        <iframe 
          src={Iframe} 
          width="1010" 
          height="1248" 
          marginHeight="0" 
          marginWidth="0" 
          frameBorder="0" 
          
          style={{
            position: 'relative',
            top: '-10%',  
            
          }} 
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
