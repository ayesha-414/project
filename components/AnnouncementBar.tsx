"use client";

export default function AnnouncementBar() {
  return (
    <div className="sticky top-[72px] z-40 bg-[#1c3879] text-white border-b border-white/20 overflow-hidden">
      <div className="whitespace-nowrap animate-[ticker_20s_linear_infinite] py-2 text-center font-semibold text-sm sm:text-base">
        📢 Applications for B.Sc & M.Sc Programmes 2026 will close on
        <span className="text-[#A3CAE9] font-bold"> 17 May 2026 </span>
        – Apply Soon! &nbsp;&nbsp;&nbsp;
        📢 Applications for B.Sc & M.Sc Programmes 2026 will close on
        <span className="text-[#A3CAE9] font-bold"> 17 May 2026 </span>
        – Apply Soon!
      </div>
    </div>
  );
}