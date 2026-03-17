export default function AnnouncementBar() {
  return (
    <div className="fixed top-[80px] left-0 w-full z-40 bg-[#1c3879]/90 backdrop-blur-md border-b border-white/20 overflow-hidden">
      
      <div className="flex whitespace-nowrap animate-[ticker_20s_linear_infinite]">
        <div className="flex items-center gap-6 py-1 px-4 text-white font-semibold text-sm tracking-wide">
          
          <span>📢 Applications for B.Sc & M.Sc Programmes 2026 will close on 
            <span className="text-[#A3CAE9] font-bold"> 30 June 2026</span> – Apply Soon!
          </span>

          <span>📢 Applications for B.Sc & M.Sc Programmes 2026 will close on 
            <span className="text-[#A3CAE9] font-bold"> 30 June 2026</span> – Apply Soon!
          </span>

        </div>
      </div>

    </div>
  );
}
