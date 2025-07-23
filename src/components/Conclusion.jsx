import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, Globe, Heart, Zap } from 'lucide-react';

export default function Conclusion() {
  const coreConclusions = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: '社区治理3.0时代已经到来',
      description: '上海正从传统的政府主导模式向"数字赋能、人文关怀、生态共生"的新时代迈进，这一转变具有里程碑意义。'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: '三大战略形成完整体系',
      description: '"超级社区大脑"、"社区合伙人"制度和"人文-生态社区"复兴行动构成了系统性的治理创新框架。'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: '上海模式具有全球示范价值',
      description: '在全球城市治理创新中，上海的探索实践为其他超大城市提供了可借鉴的经验和模式。'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: '人民城市理念得到生动实践',
      description: '通过创新治理，真正实现了"人民城市人民建，人民城市为人民"的核心理念。'
    }
  ];

  const futureVision = [
    {
      title: '智慧社区全面普及',
      description: '到2030年，上海将建成全球领先的智慧社区网络，实现社区治理的全面数字化转型。',
      timeline: '2025-2030年',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '社区共同体深度发展',
      description: '形成多元主体深度参与、利益共享的社区治理生态，居民获得感、幸福感、安全感显著提升。',
      timeline: '2026-2032年',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: '全球治理经验输出',
      description: '上海社区治理模式成为全球城市学习的标杆，为构建人类命运共同体贡献中国智慧。',
      timeline: '2030年以后',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const actionCall = [
    '政府部门要加强统筹协调，为创新治理提供政策保障和资源支持',
    '专业机构要发挥技术优势，为社区治理提供智力支撑和专业服务',
    '社会组织要积极参与，成为连接政府与居民的重要桥梁',
    '广大居民要主动参与，成为社区治理的主体力量和受益者'
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
          <h1 className="text-5xl font-bold text-white mb-6">结论与展望</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            上海的社区治理正站在一个新的历史起点，未来的竞争不仅是经济能级的竞争，更是人居品质与社会活力的竞争
          </p>
        </motion.div>

        {/* Core Conclusions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">核心结论</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coreConclusions.map((conclusion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-orange-400 mt-1">{conclusion.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">{conclusion.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{conclusion.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">未来展望</h2>
          <div className="space-y-8">
            {futureVision.map((vision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className={`bg-gradient-to-r ${vision.color} rounded-xl p-8 text-white`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{vision.title}</h3>
                  <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                    {vision.timeline}
                  </span>
                </div>
                <p className="text-lg leading-relaxed opacity-90">{vision.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-slate-800 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">战略意义</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">创新引领</h3>
              <p className="text-slate-300">
                通过制度创新、技术创新和模式创新，为全球城市治理贡献中国方案，展现中国智慧。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">民生改善</h3>
              <p className="text-slate-300">
                以人民为中心，不断提升居民的获得感、幸福感、安全感，让改革发展成果更多更公平惠及全体人民。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">全球示范</h3>
              <p className="text-slate-300">
                打造具有全球影响力的社区治理创新高地，为构建人类命运共同体提供实践样本。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">行动倡议</h2>
          <div className="space-y-6">
            {actionCall.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">{action}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-6">共建美好社区，共享美好生活</h2>
          <p className="text-xl mb-8 opacity-90">
            作为您的战略顾问，我们坚信，通过创新治理，上海必将建成一个更加宜居、更有韧性、更富魅力的美好社区，为"人民城市"建设写下最生动的注脚。
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg font-medium">
            <span>让我们携手共进</span>
            <ArrowRight className="w-6 h-6" />
            <span>创造更美好的未来</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

