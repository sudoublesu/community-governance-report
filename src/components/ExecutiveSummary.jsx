import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, ChevronRight } from 'lucide-react';

export default function ExecutiveSummary() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: '报告背景与目标',
      icon: <Target className="w-5 h-5" />,
      content: {
        title: '报告背景与目标',
        sections: [
          {
            subtitle: '研究背景',
            content: [
              '全球城市进入存量发展和内涵式增长的新阶段，社区作为城市"细胞"的活力与品质，已成为衡量城市综合竞争力的核心指标。',
              '上海作为中国的超大城市，其社区治理始终走在全国前列，在"15分钟社区生活圈"和社区规划师制度的探索上积累了丰富经验。',
              '面对人口结构变化、数字化全面渗透以及公众对高品质生活日益增长的需求，现有治理模式面临新的挑战和机遇。'
            ]
          },
          {
            subtitle: '研究目标',
            content: [
              '为上海这座卓越的全球城市提供一幅关于未来社区治理的战略蓝图',
              '通过对全球、中国及上海本地社区治理的现状与趋势进行研判，运用SWOT框架剖析优势、劣势、机遇与挑战',
              '结合优秀案例，提出三大核心战略建议，推动上海社区治理模式的迭代升级',
              '构建一个人人参与、人人共享的未来社区共同体'
            ]
          }
        ]
      }
    },
    {
      id: 1,
      title: '核心发现',
      icon: <TrendingUp className="w-5 h-5" />,
      content: {
        title: '核心发现',
        sections: [
          {
            subtitle: '发展阶段判断',
            content: [
              '上海的社区治理已从政府主导的1.0模式，历经多方参与的2.0模式，正迈向以"数字赋能、人文关怀、生态共生"为核心特征的"社区共同体3.0"时代。'
            ]
          },
          {
            subtitle: '三大关键转变',
            content: [
              '从空间营造到场景创造：超越物理空间的建设，转向以居民需求为核心的多元化、动态化生活场景的持续创造。',
              '从被动响应到主动塑造：治理体系需具备前瞻性，通过数据洞察主动预见并引导社区需求，而非仅仅响应问题。',
              '从专业主导到多元共创：社区规划师的角色需从"空间设计师"升级为"社区共创的赋能者与链接者"，激发社区内生动力。'
            ]
          },
          {
            subtitle: 'SWOT分析要点',
            content: [
              '优势：强大的政策执行力、创新的社区规划师制度、领先的数字化基础、丰富的社会组织与高校资源',
              '劣势：部门协同壁垒尚存、居民参与的广度与深度不足、存量空间更新复杂性高、运营维护可持续性挑战',
              '机遇：数字化转型浪潮、城市更新进入内涵式发展阶段、公民意识提升与参与需求增强',
              '威胁：人口结构变化、经济环境不确定性、技术应用的伦理与安全风险'
            ]
          }
        ]
      }
    },
    {
      id: 2,
      title: '战略建议概览',
      icon: <Users className="w-5 h-5" />,
      content: {
        title: '战略建议概览',
        sections: [
          {
            subtitle: '战略一：实施"超级社区大脑"计划',
            content: [
              '打造一个覆盖全市、感知灵敏、决策智能的社区治理数字孪生平台',
              '整合数据孤岛，构建社区CIM平台，包含人口结构、设施分布、空间资源、环境质量、公共安全等多维度动态数据',
              '开发"场景化"智能应用，如"一键养老"、"社区活力指数"、"矛盾纠纷预警"等模块',
              '赋能基层，提升"键对键"服务效率，让基层工作者能通过移动终端实时掌握社区动态'
            ]
          },
          {
            subtitle: '战略二：推广"社区合伙人"制度',
            content: [
              '在社区规划师制度的基础上，构建更多元、更深入、更可持续的共建共治共享生态',
              '拓展"合伙人"边界，将范围从规划师扩展至本地商户、社会企业、公益组织、艺术家、法律顾问等',
              '创新激励与合作模式，探索建立社区治理专项基金，引入社会资本参与社区微更新和公共服务运营',
              '强化社区规划师的"超级链接者"角色，成为社区资源的"链接者"、多元利益的"协调者"和居民参与的"引导者"'
            ]
          },
          {
            subtitle: '战略三：启动"人文-生态社区"复兴行动',
            content: [
              '推动社区发展从满足基本功能需求，向兼顾人文精神传承与绿色可持续发展的更高层次迈进',
              '实施"社区记忆唤醒"计划，系统性地挖掘和活化社区的历史文脉与集体记忆',
              '推广"低碳生活场景"，将低碳理念融入"15分钟社区生活圈"建设',
              '倡导"家门口的生物多样性"，在社区绿化中引入"生境花园"理念'
            ]
          }
        ]
      }
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
          <h1 className="text-5xl font-bold text-white mb-6">执行摘要</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            本章节提供报告的核心要点和主要发现，为读者快速了解上海社区治理的现状、挑战和未来发展方向提供指引。
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">{tabs[activeTab].content.title}</h2>
          
          <div className="space-y-8">
            {tabs[activeTab].content.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-4">{section.subtitle}</h3>
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <ChevronRight className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Summary Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: '3.0', label: '社区共同体时代', description: '数字赋能、人文关怀、生态共生' },
            { number: '3', label: '核心战略建议', description: '超级社区大脑、社区合伙人、人文生态社区' },
            { number: '15', label: '分钟生活圈', description: '上海社区治理的重要实践' },
            { number: '30+', label: '页面深度分析', description: '全方位解析社区治理创新' }
          ].map((stat, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 text-center hover:bg-slate-700 transition-colors duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

