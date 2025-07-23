import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Building2, Users, TrendingUp, ChevronRight } from 'lucide-react';

export default function GlobalPerspective() {
  const [activeCase, setActiveCase] = useState(0);

  const globalCases = [
    {
      id: 0,
      title: '伦敦国王十字街区',
      location: '英国伦敦',
      description: '通过公私合作模式，将废弃工业区改造为充满活力的创新社区',
      keyFeatures: [
        '公私合作模式(PPP)的成功实践',
        '历史建筑保护与现代功能融合',
        '创新产业与居住功能混合',
        '可持续发展理念贯穿始终'
      ],
      insights: [
        '政府与私营部门的有效协作是成功关键',
        '尊重历史文脉的同时注入现代活力',
        '多元功能混合提升区域整体价值',
        '长期规划与分期实施相结合'
      ]
    },
    {
      id: 1,
      title: '新加坡邻里中心',
      location: '新加坡',
      description: '政府主导下高效、便捷的社区服务体系典型代表',
      keyFeatures: [
        '政府主导的统一规划设计',
        '一站式社区服务集成',
        '标准化与本土化相结合',
        '高效的运营管理体系'
      ],
      insights: [
        '强有力的政府统筹是高效治理的基础',
        '标准化服务提升整体运营效率',
        '因地制宜的本土化适应性改造',
        '持续的维护更新保证服务质量'
      ]
    },
    {
      id: 2,
      title: '巴塞罗那超级街区',
      location: '西班牙巴塞罗那',
      description: '以人为本的城市空间重构，优先考虑行人和自行车出行',
      keyFeatures: [
        '汽车交通限制与步行空间扩大',
        '绿色基础设施大幅增加',
        '社区参与式规划决策',
        '数字化监测与评估体系'
      ],
      insights: [
        '交通模式转变带来空间品质提升',
        '绿色基础设施改善环境质量',
        '居民参与确保方案可接受性',
        '数据驱动的持续优化机制'
      ]
    }
  ];

  const globalTrends = [
    {
      icon: <Users className="w-6 h-6" />,
      title: '多元主体协同',
      description: '从政府单向管理向多元主体协同共治转变，公私合作成为主流模式'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: '功能复合化',
      description: '社区功能日趋复合，居住、工作、休闲、服务等功能有机融合'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: '数字化赋能',
      description: '物联网、大数据、人工智能等技术深度融入社区治理各个环节'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: '可持续发展',
      description: '绿色低碳、韧性发展成为社区建设的重要考量因素'
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
          <h1 className="text-5xl font-bold text-white mb-6">全球视野</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            在全球范围内，社区治理正经历从传统的政府单向管理向多元主体协同共治的深刻转变
          </p>
        </motion.div>

        {/* Global Trends */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">全球社区治理趋势</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalTrends.map((trend, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300">
                <div className="text-orange-400 mb-4">{trend.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{trend.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{trend.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* International Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">国际最佳实践案例</h2>
          
          {/* Case Navigation */}
          <div className="flex flex-wrap justify-center mb-8">
            {globalCases.map((caseItem) => (
              <button
                key={caseItem.id}
                onClick={() => setActiveCase(caseItem.id)}
                className={`px-6 py-3 m-2 rounded-full font-medium transition-all duration-300 ${
                  activeCase === caseItem.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {caseItem.title}
              </button>
            ))}
          </div>

          {/* Case Content */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-2xl p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-orange-400 mr-3" />
                  <span className="text-orange-400 font-medium">{globalCases[activeCase].location}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">{globalCases[activeCase].title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">{globalCases[activeCase].description}</p>
                
                <h4 className="text-xl font-semibold text-white mb-4">核心特征</h4>
                <div className="space-y-3">
                  {globalCases[activeCase].keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <ChevronRight className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">经验启示</h4>
                <div className="space-y-4">
                  {globalCases[activeCase].insights.map((insight, index) => (
                    <div key={index} className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">{insight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">全球经验的共同特点</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-3">人本化导向</h3>
                <p className="text-slate-300 leading-relaxed">
                  所有成功案例都强调以人为本，将居民需求和体验放在首位，通过改善生活品质来提升社区活力。
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-3">系统性思维</h3>
                <p className="text-slate-300 leading-relaxed">
                  不是单纯的物理空间改造，而是从社会、经济、环境等多个维度进行系统性的综合治理。
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-3">创新机制</h3>
                <p className="text-slate-300 leading-relaxed">
                  在治理机制、资金筹措、技术应用等方面都有创新突破，形成了可复制可推广的经验模式。
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-3">持续演进</h3>
                <p className="text-slate-300 leading-relaxed">
                  建立了持续改进的机制，能够根据实际效果和居民反馈不断优化调整治理策略。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

