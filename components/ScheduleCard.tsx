"use client";

import { Calendar, Users } from "lucide-react";

interface ScheduleItem {
  title: string;
  date: string;
}

interface ScheduleCardProps {
  title: string;
  subtitle: string;
  items: ScheduleItem[];
}

export default function ScheduleCard({ title, subtitle, items }: ScheduleCardProps) {
  return (
    <div className="schedule-card h-full">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 bg-[#1c3879]/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <Users className="w-7 h-7 text-[#1c3879]" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-[#1a1a2e]">{title}</h4>
          <p className="text-[#e8505b] text-sm font-medium">{subtitle}</p>
        </div>
      </div>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <Calendar className="w-5 h-5 text-[#1c3879] flex-shrink-0 mt-0.5" />
            <div>
              <h6 className="text-sm font-medium text-gray-700 leading-tight">{item.title}</h6>
              <p className="text-[#e8505b] font-semibold text-sm mt-1">{item.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
