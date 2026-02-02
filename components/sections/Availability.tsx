"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Availability() {
    const t = useTranslations("Availability");
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const renderDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const totalDays = daysInMonth(year, month);
        const startDay = firstDayOfMonth(year, month);
        const days = [];

        // Fill empty slots for previous month's days
        for (let i = 0; i < (startDay === 0 ? 6 : startDay - 1); i++) {
            days.push(<div key={`empty-${i}`} className="p-4 border border-gray-100 bg-gray-50/50"></div>);
        }

        // Fill days of the current month
        for (let day = 1; day <= totalDays; day++) {
            const isReserved = Math.random() > 0.7; // Simulating availability
            const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();

            days.push(
                <div
                    key={day}
                    className={`p-4 border border-gray-200 text-center transition-all ${isReserved ? "bg-red-50 text-red-600 font-medium" : "bg-green-50 text-green-700 hover:bg-green-100"
                        } ${isToday ? "ring-2 ring-primary ring-inset font-bold" : ""}`}
                >
                    {day}
                    <div className="text-[10px] mt-1 uppercase tracking-tighter opacity-60">
                        {isReserved ? "Reserved" : "Available"}
                    </div>
                </div>
            );
        }

        return days;
    };

    return (
        <section id="availability" className="section-padding bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary uppercase tracking-wider">
                    {t("title")}
                </h2>

                <div className="bg-white shadow-2xl overflow-hidden border border-gray-100">
                    {/* Calendar Header */}
                    <div className="bg-primary p-6 text-white flex items-center justify-between">
                        <button onClick={handlePrevMonth} className="hover:scale-110 transition-transform"><FaChevronLeft size={24} /></button>
                        <h3 className="text-2xl font-bold uppercase tracking-widest">
                            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </h3>
                        <button onClick={handleNextMonth} className="hover:scale-110 transition-transform"><FaChevronRight size={24} /></button>
                    </div>

                    {/* Weekdays */}
                    <div className="grid grid-cols-7 bg-gray-50 text-center font-bold text-sm text-gray-500 py-3 uppercase tracking-tighter border-b border-gray-100">
                        <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                    </div>

                    {/* Days Grid */}
                    <div className="grid grid-cols-7">
                        {renderDays()}
                    </div>

                    {/* Legend */}
                    <div className="p-6 bg-gray-50 flex justify-center gap-8 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded bg-green-500"></span>
                            <span>Available</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded bg-red-500"></span>
                            <span>Reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
