import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Leaf, ChevronRight, Target, Calendar } from 'lucide-react';

export default function StrategicRecommendations() {
  const [activeStrategy, setActiveStrategy] = useState(0);

  const strategies = [
    {
      id: 0,
      title: '实施"超级社区大脑"计划',
      subtitle: 'Digital Twin for Community Governance',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      objective: '打造一个覆盖全市、感知灵敏、决策智能的社区治理数字孪生平台',
      actions: [
        {
          title: '整合数据孤岛，构建社区CIM平台',
          description: '在现有"一网统管"基础上，进一步打通规划资源、民政、卫健、城管、公安等部门数据，建立以社区为单元的城市信息模型（CIM）。',
          details: [
            '建立统一的数据标准和接口规范',
            '构建多维度动态数据库（人口结构、设施分布、空间资源、环境质量、公共安全）',
            '实现数据的实时更新和共享',
            '建立数据安全和隐私保护机制'
          ]
        },
        {
          title: '开发"场景化"智能应用',
          description: '基于"超级社区大脑"，开发面向不同治理场景的应用模块。',
          details: [
            '"一键养老"模块：整合居家养老、日托、助餐等服务，为老年人智能匹配资源',
            '"社区活力指数"模块：实时监测公共空间使用频率，为空间优化提供数据支撑',
            '"矛盾纠纷预警"模块：通过大数据分析，提前识别潜在的社区矛盾',
            '"应急响应"模块：快速调配资源，提升突发事件处置能力'
          ]
        },
        {
          title: '赋能基层，提升"键对键"服务效率',
          description: '将平台的分析能力和数据接口下沉到街道和居委会，让基层工作者能通过移动终端实时掌握社区动态。',
          details: [
            '开发移动端应用，支持离线操作',
            '提供可视化数据分析工具',
            '建立智能决策支持系统',
            '实现"键对键"替代"面对面"，提升服务响应速度与精准度'
          ]
        }
      ]
    },
    {
      id: 1,
      title: '推广"社区合伙人"制度',
      subtitle: 'Community Partnership Initiative',
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      objective: '在社区规划师制度的基础上，构建更多元、更深入、更可持续的共建共治共享生态',
      actions: [
        {
          title: '拓展"合伙人"边界',
          description: '将"合伙人"范围从规划师扩展至本地商户、社会企业、公益组织、艺术家、法律顾问等多领域专业人士。',
          details: [
            '建立"社区合伙人资源库"，分类管理不同领域的专业人才',
            '实施"揭榜挂帅"式的项目合作机制',
            '建立合伙人认证和评价体系',
            '定期组织合伙人交流和培训活动'
          ]
        },
        {
          title: '创新激励与合作模式',
          description: '探索建立社区治理专项基金，引入社会资本参与社区微更新和公共服务运营。',
          details: [
            '设立社区治理专项基金，多渠道筹措资金',
            '政府购买服务，为合伙人提供稳定收入来源',
            '品牌共建，提升合伙人的社会影响力',
            '空间使用权置换，降低合伙人参与成本'
          ]
        },
        {
          title: '强化社区规划师的"超级链接者"角色',
          description: '推动社区规划师的角色升级，从单纯的技术顾问转变为社区资源的"链接者"、多元利益的"协调者"和居民参与的"引导者"。',
          details: [
            '提升社区规划师的综合素养和协调能力',
            '建立社区规划师与合伙人的协作机制',
            '开发居民需求"转译"工具和方法',
            '建立项目全过程跟踪和评估体系'
          ]
        }
      ]
    },
    {
      id: 2,
      title: '启动"人文-生态社区"复兴行动',
      subtitle: 'H+E Community Revival Action',
      icon: <Leaf className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      objective: '推动社区发展从满足基本功能需求，向兼顾人文精神传承与绿色可持续发展的更高层次迈进',
      actions: [
        {
          title: '实施"社区记忆唤醒"计划',
          description: '在城市更新项目中，系统性地挖掘和活化社区的历史文脉与集体记忆。',
          details: [
            '开展社区历史文化资源普查',
            '组织居民参与口述史收集活动',
            '举办老物件征集和展示活动',
            '创作艺术装置，将社区故事融入公共空间设计'
          ]
        },
        {
          title: '推广"低碳生活场景"',
          description: '将低碳理念融入"15分钟社区生活圈"建设，构建智能垃圾分类回收体系。',
          details: [
            '建设智能垃圾分类回收体系',
            '推广社区共享单车和电动汽车充电桩',
            '利用闲置屋顶发展社区光伏项目',
            '打造串联各类绿地的"社区绿道"'
          ]
        },
        {
          title: '倡导"家门口的生物多样性"',
          description: '在社区绿化中，引入"生境花园"理念，鼓励种植本土植物，为鸟类、昆虫等提供栖息地。',
          details: [
            '推广本土植物种植，建设生境花园',
            '为鸟类、昆虫等小动物提供栖息环境',
            '打造社区生态科普角，开展环境教育',
            '让居民在日常生活中感受自然之美，提升生态保护意识'
          ]
        }
      ]
    }
  ];

  const timeline = [
    { phase: '第一阶段', period: '2025-2026年', title: '试点启动', tasks: ['选择10个社区开展试点', '建立基础数据平台', '培训首批社区合伙人'] },
    { phase: '第二阶段', period: '2027-2028年', title: '扩面推广', tasks: ['覆盖100个社区', '完善平台功能', '建立运营机制'] },
    { phase: '第三阶段', period: '2029-2030年', title: '全面实施', tasks: ['覆盖全市所有社区', '形成成熟模式', '对外输出经验'] }
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
          <h1 className="text-5xl font-bold text-white mb-6">战略建议</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            三大核心战略建议，推动上海社区治理模式的迭代升级，构建人人参与、人人共享的未来社区共同体
          </p>
        </motion.div>

        {/* Strategy Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className={`cursor-pointer transition-all duration-300 rounded-xl p-6 ${
                activeStrategy === strategy.id
                  ? `bg-gradient-to-br ${strategy.color} text-white shadow-lg transform scale-105`
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              onClick={() => setActiveStrategy(strategy.id)}
            >
              <div className="mb-4">{strategy.icon}</div>
              <h3 className="text-lg font-bold mb-2">{strategy.title}</h3>
              <p className="text-sm opacity-80">{strategy.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Strategy Details */}
        <motion.div
          key={activeStrategy}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="flex items-center mb-8">
            <div className={`p-4 rounded-full bg-gradient-to-r ${strategies[activeStrategy].color} text-white mr-6`}>
              {strategies[activeStrategy].icon}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{strategies[activeStrategy].title}</h2>
              <p className="text-slate-300 italic">{strategies[activeStrategy].subtitle}</p>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Target className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">战略目标</h3>
                <p className="text-slate-300 leading-relaxed">{strategies[activeStrategy].objective}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {strategies[activeStrategy].actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-orange-500 pl-6"
              >
                <h4 className="text-xl font-semibold text-orange-400 mb-3">
                  行动{index + 1}：{action.title}
                </h4>
                <p className="text-slate-300 mb-4 leading-relaxed">{action.description}</p>
                <div className="space-y-2">
                  {action.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <ChevronRight className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="flex items-center mb-8">
            <Calendar className="w-8 h-8 text-orange-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">实施路径与时间表</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
            
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  className="flex items-start"
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8 flex-shrink-0 z-10">
                    {index + 1}
                  </div>
                  <div className="bg-slate-800 rounded-lg p-6 flex-grow">
                    <div className="flex items-center mb-3">
                      <h4 className="text-xl font-bold text-orange-400 mr-4">{phase.phase}</h4>
                      <span className="text-slate-400">({phase.period})</span>
                    </div>
                    <h5 className="text-lg font-semibold text-white mb-3">{phase.title}</h5>
                    <div className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <span className="text-slate-300 text-sm">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Expected Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-slate-800 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">预期成效与影响</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">短期成效（1-2年）</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>建立数字化治理平台，提升社区管理效率30%以上</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>培育社区合伙人队伍，增强社区治理专业化水平</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>启动人文生态社区建设，提升居民生活品质</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">长期影响（3-5年）</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>形成可复制推广的"上海模式"，引领全国社区治理创新</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>构建人人参与、人人共享的社区共同体</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>打造具有全球影响力的社区治理创新高地</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

