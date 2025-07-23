import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Building, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const corePoints = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "从空间营造到场景创造",
      description: "超越物理空间的建设，转向以居民需求为核心的多元化、动态化生活场景的持续创造。"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "从被动响应到主动塑造",
      description: "治理体系需具备前瞻性，通过数据洞察主动预见并引导社区需求，而非仅仅响应问题。"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "从专业主导到多元共创",
      description: "社区规划师的角色需从\"空间设计师\"升级为\"社区共创的赋能者与链接者\"，激发社区内生动力。"
    }
  ];

  const strategies = [
    {
      title: "实施\"超级社区大脑\"计划",
      description: "构建市-区-街道三级联动的社区治理数字孪生平台，整合数据资源，实现精细化管理、智能决策与高效服务。"
    },
    {
      title: "推广\"社区合伙人\"制度",
      description: "在现有社区规划师制度基础上，引入更多元的社会资本与专业力量，建立共建共治共享的利益共同体。"
    },
    {
      title: "启动\"人文-生态社区\"复兴行动",
      description: "聚焦社区的文化传承与绿色可持续发展，打造兼具烟火气与未来感的魅力家园。"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                创新治理
              </span>
              <br />
              <span className="text-white">共建上海美好社区</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              社区规划师的战略洞察与建议
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/executive-summary')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              开始阅读
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">报告概述</h2>
            <div className="max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed space-y-6">
              <p>
                本报告旨在为上海——这座卓越的全球城市——提供一幅关于未来社区治理的战略蓝图。在全球城市进入存量发展和内涵式增长的新阶段，社区作为城市"细胞"的活力与品质，已成为衡量城市综合竞争力的核心指标。
              </p>
              <p>
                上海在社区治理领域取得了卓越成就，尤其是在"15分钟社区生活圈"和社区规划师制度的探索上，为全国乃至全球提供了宝贵经验。
              </p>
              <p>
                面对人口结构变化、数字化全面渗透以及公众对高品质生活日益增长的需求，现有治理模式面临新的挑战。本报告运用SWOT框架剖析了上海的优势、劣势、机遇与挑战，并结合优秀案例，提出三大核心战略建议。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Points Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">核心观点</h2>
            <p className="text-xl text-slate-300 mb-12">
              上海的社区治理正迈向以"数字赋能、人文关怀、生态共生"为核心特征的"社区共同体3.0"时代
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {corePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-colors duration-300"
              >
                <div className="text-orange-400 mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{point.title}</h3>
                <p className="text-slate-300 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Recommendations Preview */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">战略建议概览</h2>
            <p className="text-xl text-slate-300 mb-12">
              三大战略，巩固上海在全球城市社区治理领域的领先地位
            </p>
          </motion.div>

          <div className="space-y-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 + index * 0.2 }}
                className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 hover:from-slate-700 hover:to-slate-600 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  {index + 1}. {strategy.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">{strategy.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => navigate('/strategic-recommendations')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              查看详细战略建议
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

