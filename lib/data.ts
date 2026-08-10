export interface Product {
  slug: string;
  name: string;
  emoji: string;
  category: string;
  lifespanMin: number;
  lifespanMax: number;
  costMin: number;
  costMax: number;
  costUnit: string;
  tagColor: string;
  gradient: string;
}

export const products: Product[] = [
  {
    slug: "refrigerator",
    name: "Refrigerator",
    emoji: "🧊",
    category: "Home Appliance",
    lifespanMin: 10,
    lifespanMax: 15,
    costMin: 800,
    costMax: 2500,
    costUnit: "$",
    tagColor: "bg-sky-500",
    gradient: "from-sky-100 to-sky-200",
  },
  {
    slug: "mattress",
    name: "Mattress",
    emoji: "🛏️",
    category: "Home Goods",
    lifespanMin: 7,
    lifespanMax: 10,
    costMin: 500,
    costMax: 3000,
    costUnit: "$",
    tagColor: "bg-amber-500",
    gradient: "from-amber-100 to-amber-200",
  },
  {
    slug: "car-tires",
    name: "Car Tires",
    emoji: "🚗",
    category: "Automotive",
    lifespanMin: 4,
    lifespanMax: 6,
    costMin: 400,
    costMax: 1200,
    costUnit: "$",
    tagColor: "bg-green-500",
    gradient: "from-green-100 to-green-200",
  },
  {
    slug: "washing-machine",
    name: "Washing Machine",
    emoji: "🍽️",
    category: "Home Appliance",
    lifespanMin: 9,
    lifespanMax: 12,
    costMin: 500,
    costMax: 1500,
    costUnit: "$",
    tagColor: "bg-blue-500",
    gradient: "from-blue-100 to-blue-200",
  },
  {
    slug: "laptop",
    name: "Laptop",
    emoji: "💻",
    category: "Electronics",
    lifespanMin: 4,
    lifespanMax: 6,
    costMin: 600,
    costMax: 2500,
    costUnit: "$",
    tagColor: "bg-purple-500",
    gradient: "from-purple-100 to-purple-200",
  },
  {
    slug: "water-heater",
    name: "Water Heater",
    emoji: "🚿",
    category: "Home Appliance",
    lifespanMin: 8,
    lifespanMax: 12,
    costMin: 800,
    costMax: 3000,
    costUnit: "$",
    tagColor: "bg-orange-500",
    gradient: "from-orange-100 to-orange-200",
  },
  {
    slug: "air-conditioner",
    name: "Air Conditioner",
    emoji: "❄️",
    category: "Home Appliance",
    lifespanMin: 15,
    lifespanMax: 20,
    costMin: 3000,
    costMax: 7500,
    costUnit: "$",
    tagColor: "bg-cyan-500",
    gradient: "from-cyan-100 to-cyan-200",
  },
];
