import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Building } from 'lucide-react';

export default function ChinaContext() {
  const evolutionStages = [
    {
      period: '1980s-1990s',
      title: '单位制时代',
      description: '以工作单位为核心的社区管理模式',
      features: ['单位大院', '福利分房', '单位办社会', '封闭式管理']
    },
    {
      period: '2000s-2010s',
      title: '社区制转型',
      description: '向现代社区治理体系的过渡期',
      features: ['居委会建设', '物业管理兴起', '业主委员会', '开放式社区']
    },
    {
      period: '2010s-现在',
      title: '协同治理',
      description: '多元主体共建共治共享格局',
      features: ['党建引领', '社会组织参与', '居民自治', '智慧社区']
    }
  ];

  const policyFramework = [
    {
      title: '党建引领',
      description: '坚持党的领导，发挥基层党组织的战斗堡垒作用',
      details: [
        '街道党工委统筹协调',
        '社区党组织全覆盖',
        '党员先锋模范作用',
        '红色物业党建联建'
      ]
    },
    {
      title: '政府负责',
      description: '各级政府履行社区治理主体责任',
      details: [
        '政策制定与资源配置',
        '公共服务供给保障',
        '监督管理与考核评价',
        '法治保障与规范引导'
      ]
    },
    {
      title: '社会协同',
      description: '社会组织、企业等多元主体共同参与',
      details: [
        '社会组织专业服务',
        '企业社会责任履行',
        '志愿服务组织动员',
        '专业社工队伍建设'
      ]
    },
    {
      title: '公众参与',
      description: '居民群众是社区治理的主体力量',
      details: [
        '居民议事协商',
        '民主决策参与',
        '监督评议权利',
        '自治组织建设'
      ]
    }
  ];

  const futureCommunity = {
    concept: '未来社区',
    location: '浙江省',
    description: '以人本化、生态化、数字化为导向，围绕九大场景进行系统性构建',
    nineScenes: [
      { name: '邻里场景', description: '构建熟人社会，增进邻里互动' },
      { name: '教育场景', description: '全龄段教育服务，终身学习体系' },
      { name: '健康场景', description: '全生命周期健康管理服务' },
      { name: '创业场景', description: '创新创业平台，就业机会创造' },
      { name: '建筑场景', description: '绿色建筑，智能家居系统' },
      { name: '交通场景', description: '绿色出行，智慧交通系统' },
      { name: '低碳场景', description: '节能减排，循环经济模式' },
      { name: '服务场景', description: '一站式便民服务体系' },
      { name: '治理场景', description: '数字化治理，居民参与决策' }
    ]
  };

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
          <h1 className="text-5xl font-bold text-white mb-6">中国坐标</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            中国社区治理由党建引领，经历了从"单位制"到"社区制"的转型，逐步形成了"党委领导、政府负责、社会协同、公众参与"的格局
          </p>
        </motion.div>

        {/* Evolution Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">中国社区治理演进历程</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
            
            <div className="space-y-12">
              {evolutionStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-orange-400 mr-2" />
                        <span className="text-orange-400 font-semibold">{stage.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{stage.title}</h3>
                      <p className="text-slate-300 mb-4">{stage.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {stage.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-900 z-10"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Policy Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">政策框架与制度创新</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {policyFramework.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-orange-400 mb-3">{framework.title}</h3>
                <p className="text-slate-300 mb-4">{framework.description}</p>
                <div className="space-y-2">
                  {framework.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Community Case */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-orange-400 mr-2" />
              <span className="text-orange-400 font-semibold">{futureCommunity.location}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{futureCommunity.concept}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{futureCommunity.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {futureCommunity.nineScenes.map((scene, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-colors duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{scene.name}</h4>
                <p className="text-slate-300 text-sm">{scene.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full">
              <Building className="w-5 h-5 mr-2" />
              <span className="font-medium">为中国城市社区现代化建设提供先行样本</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

