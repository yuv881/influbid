import { FaBriefcase, FaDollarSign, FaUsers, FaBullseye } from 'react-icons/fa6';

const statsData = [
  {
    id: 1,
    icon: FaBriefcase,
    metric: "2,400+",
    label: "Active Campaigns",
  },
  {
    id: 2,
    icon: FaDollarSign,
    metric: "$4.2M",
    label: "Paid to Creators",
  },
  {
    id: 3,
    icon: FaUsers,
    metric: "18K+",
    label: "Verified Creators",
  },
  {
    id: 4,
    icon: FaBullseye,
    metric: "94%",
    label: "Match Rate",
  },
];

export default function Stats() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="glass-panel hover:border-brand-orange/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/5 group"
            >
              {/* Icon Container */}
              <div className="bg-brand-orange/10 p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-6 w-6 text-brand-orange" />
              </div>

              {/* Metric */}
              <span className="font-heading text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-none">
                {stat.metric}
              </span>

              {/* Label */}
              <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
