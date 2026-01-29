"use client";

import { useState } from "react";
import Image from "next/image";

type Category =
  | "All"
  | "Entrepreneurs"
  | "PhD Holders"
  | "Higher Studies"
  | "Events"
  | "Sports & Culturals";

const achievements = [
  {
    name: "Karthick Ravi",
    title: "Badminton State Rank Holder",
    image: "/achievements/karthick-ravi.jpg",
    category: "Sports & Culturals",
  },
  {
    name: "Charankumar P",
    title:
      "Guinness World Record holder ‘Football Touches with Alternating Feet in one minute’",
    image: "/achievements/charankumar-p.jpg",
    category: "Sports & Culturals",
  },
  {
    name: "Sai Karthik",
    title:
      "Petrichor 23 Techno Cultural Feast, IIT Palakkad – Breaking Band, 2nd Position",
    image: "/achievements/sai-karthik.jpg",
    category: "Events",
  },
  {
    name: "Alagu Prakalya",
    title:
      "AI Tamilnadu Kalambagam – Talk on ‘Building GPT models of Tamil’",
    image: "/achievements/alagu-prakalya.jpg",
    category: "Higher Studies",
  },
];

export default function Achievements() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredAchievements =
    activeCategory === "All"
      ? achievements
      : achievements.filter(
          (item) => item.category === activeCategory
        );

  const categories: Category[] = [
    "All",
    "Entrepreneurs",
    "PhD Holders",
    "Higher Studies",
    "Events",
    "Sports & Culturals",
  ];

  return (
    <section className="w-full px-6 py-10">
      {/* Filter */}
      <div className="mb-8 text-center">
        <p className="mb-4 font-medium text-purple-600">
          Filter by:
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-md border px-5 py-2 text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "border-blue-500 text-blue-600 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredAchievements.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-6 text-center shadow-md"
          >
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
              <Image
                src={item.image}
                alt={item.name}
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-purple-700">
              {item.name}
            </h3>

            <p className="text-sm text-gray-600">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
