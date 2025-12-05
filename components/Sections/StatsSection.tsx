import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { STATS } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'Oca', sales: 4000 },
  { name: 'Şub', sales: 6000 },
  { name: 'Mar', sales: 8500 },
  { name: 'Nis', sales: 12000 },
  { name: 'May', sales: 18000 },
  { name: 'Haz', sales: 24000 },
  { name: 'Tem', sales: 35000 },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-roasell-card border-t border-white/5 relative">
      <div className="container mx-auto px-4">

        {/* Header - Compact */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-4xl font-bold font-display mb-1">
            RoaSell Report
          </h2>
          <p className="text-gray-400 text-xs md:text-base mb-6">
            Ekosistem satış istatistikleri
          </p>
        </div>

        {/* Stats Grid - Ultra Compact for Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-roasell-dark p-3 md:p-4 rounded-lg border-t-2 md:border-t-4 border-roasell-gold relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 p-1.5 opacity-10 group-hover:opacity-20 transition-opacity">
                <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 text-roasell-gold" />
              </div>
              <p className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-wider mb-0.5">{stat.label}</p>
              <div className="text-lg md:text-2xl font-bold text-white flex items-baseline gap-0.5 font-sans tracking-tight">
                {stat.prefix}
                <span>{stat.value}</span>
                {stat.suffix}
              </div>
              {stat.trend && (
                <div className={`text - [9px] md: text - xs mt - 0.5 flex items - center gap - 1 ${stat.trend > 0 ? 'text-green-500' : 'text-red-500'} `}>
                  {stat.trend > 0 ? '▲' : '▼'} {Math.abs(stat.trend)}%
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Chart Card - Full Width */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-roasell-dark border border-white/5 rounded-lg p-3 md:p-6"
          >
            <div className="flex justify-between items-center mb-2 md:mb-4">
              <h3 className="text-sm md:text-lg font-semibold">Büyüme Trendi</h3>
              <span className="flex items-center gap-1 text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded-full text-[10px] md:text-xs font-medium">
                <ArrowUpRight className="w-3 h-3" />
                +124.5%
              </span>
            </div>
            <div className="h-[200px] md:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F5A623" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#F5A623" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="name" stroke="#666" axisLine={false} tickLine={false} fontSize={10} />
                  <YAxis stroke="#666" axisLine={false} tickLine={false} tickFormatter={(value) => `${value / 1000}k`} fontSize={10} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#161616', borderColor: '#333', color: '#fff', fontSize: '11px', padding: '5px' }}
                    itemStyle={{ color: '#F5A623' }}
                  />
                  <Area type="monotone" dataKey="sales" stroke="#F5A623" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;