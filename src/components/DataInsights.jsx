import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Building, Clock } from 'lucide-react';

export default function DataInsights() {
  // Sample data for visualizations
  const communityCircleData = [
    { district: '黄浦区', completed: 15, planned: 5, satisfaction: 88 },
    { district: '徐汇区', completed: 18, planned: 7, satisfaction: 92 },
    { district: '长宁区', completed: 12, planned: 8, satisfaction: 85 },
    { district: '静安区', completed: 14, planned: 6, satisfaction: 90 },
    { district: '普陀区', completed: 16, planned: 9, satisfaction: 87 },
    { district: '杨浦区', completed: 20, planned: 10, satisfaction: 94 }
  ];

  const participationTrend = [
    { year: '2019', participation: 35, satisfaction: 78 },
    { year: '2020', participation: 42, satisfaction: 82 },
    { year: '2021', participation: 58, satisfaction: 85 },
    { year: '2022', participation: 67, satisfaction: 88 },
    { year: '2023', participation: 75, satisfaction: 91 },
    { year: '2024', participation: 82, satisfaction: 93 }
  ];

  const serviceDistribution = [
    { name: '基本服务', value: 40, color: '#3B82F6' },
    { name: '品质服务', value: 35, color: '#F59E0B' },
    { name: '特色服务', value: 25, color: '#10B981' }
  ];

  const ageGroupData = [
    { age: '18-30岁', participation: 68, digital: 95 },
    { age: '31-45岁', participation: 75, digital: 88 },
    { age: '46-60岁', participation: 82, digital: 72 },
    { age: '60岁以上', participation: 89, digital: 45 }
  ];

  const keyMetrics = [
    {
      icon: <Building className="w-8 h-8" />,
      title: '15分钟生活圈',
      value: '100+',
      unit: '个',
      description: '已建成示范性生活圈',
      trend: '+25%'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '社区规划师',
      value: '1000+',
      unit: '人',
      description: '专业服务人员',
      trend: '+40%'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '居民满意度',
      value: '91',
      unit: '%',
      description: '综合满意度评价',
      trend: '+8%'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '服务响应时间',
      value: '15',
      unit: '分钟',
      description: '平均响应时间',
      trend: '-30%'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-6">数据洞察</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            通过数据可视化展示上海社区治理的发展成效和趋势预测
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-orange-400">{metric.icon}</div>
                <span className="text-green-400 text-sm font-medium">{metric.trend}</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {metric.value}<span className="text-lg text-slate-400">{metric.unit}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
              <p className="text-slate-400 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Community Circle Progress */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-slate-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">各区15分钟生活圈建设进展</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={communityCircleData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="district" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Bar dataKey="completed" fill="#F59E0B" name="已完成" />
                <Bar dataKey="planned" fill="#3B82F6" name="规划中" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Participation Trend */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-slate-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">居民参与度与满意度趋势</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={participationTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Line type="monotone" dataKey="participation" stroke="#10B981" strokeWidth={3} name="参与度(%)" />
                <Line type="monotone" dataKey="satisfaction" stroke="#F59E0B" strokeWidth={3} name="满意度(%)" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Service Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-slate-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">社区服务设施分布</h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={serviceDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}%`}
                  >
                    {serviceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Age Group Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-slate-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">不同年龄群体参与情况</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageGroupData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="age" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Bar dataKey="participation" fill="#10B981" name="参与度(%)" />
                <Bar dataKey="digital" fill="#8B5CF6" name="数字化接受度(%)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Insights Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">数据洞察要点</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">发展成效</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>15分钟生活圈建设成效显著，各区均超额完成建设目标</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>居民参与度持续提升，从2019年的35%增长到2024年的82%</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>满意度稳步上升，达到91%的高水平</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">趋势预测</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>数字化治理将成为主流，需要关注老年群体的数字鸿沟问题</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>社区服务需求将更加多元化，特色服务比重将持续增长</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>居民参与热情高涨，需要建立更多参与渠道和平台</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

