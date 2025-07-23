import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, Target, Shield } from 'lucide-react';

export default function SWOTAnalysis() {
  const [activeQuadrant, setActiveQuadrant] = useState(0);

  const swotData = [
    {
      id: 0,
      type: 'strengths',
      title: '优势 (Strengths)',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: '强大的政策执行力与顶层设计',
          description: '"15分钟社区生活圈"行动有明确的规划导则和行动方案，保障了实施的系统性与连贯性。'
        },
        {
          title: '创新的社区规划师制度',
          description: '在全国率先建立并推广社区规划师制度，有效链接了专业知识与基层需求，提升了社区更新的品质。'
        },
        {
          title: '领先的数字化基础',
          description: '"一网通办"和"一网统管"为社区的数字化治理奠定了坚实基础，数据资源丰富。'
        },
        {
          title: '丰富的社会组织与高校资源',
          description: '杨浦等区依托同济大学等高校资源，形成了"三区联动"的良好基础，社会组织发育相对成熟。'
        }
      ]
    },
    {
      id: 1,
      type: 'weaknesses',
      title: '劣势 (Weaknesses)',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'from-red-500 to-rose-500',
      items: [
        {
          title: '部门协同壁垒尚存',
          description: '尽管强调协同，但在项目落地层面，规划、建设、民政、城管等部门间仍存在信息与流程壁垒，影响效率。'
        },
        {
          title: '居民参与的广度与深度不足',
          description: '现有参与形式多为听证会、意见征集等，居民从"旁观者"到"共建者"的角色转变仍需深化，参与渠道有待拓宽。'
        },
        {
          title: '存量空间更新的复杂性高',
          description: '老旧小区众多，空间改造面临产权复杂、利益协调困难、资金来源单一等挑战。'
        },
        {
          title: '运营维护的可持续性挑战',
          description: '部分微更新项目"重建轻管"，缺乏长效的运营和维护机制，导致空间活力难以持续。'
        }
      ]
    },
    {
      id: 2,
      type: 'opportunities',
      title: '机遇 (Opportunities)',
      icon: <Target className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: '数字化转型浪潮',
          description: '人工智能、物联网、大数据等技术为社区治理的精细化、智能化提供了前所未有的技术赋能。'
        },
        {
          title: '城市更新进入内涵式发展阶段',
          description: '政策导向从"拆改留"转向"留改拆"，更加注重社区品质与活力的内涵式提升，为社区规划师提供了广阔舞台。'
        },
        {
          title: '公民意识提升与参与需求增强',
          description: '新一代市民对社区公共事务的参与意愿更强，为构建共建共治共享的治理共同体提供了社会基础。'
        }
      ]
    },
    {
      id: 3,
      type: 'threats',
      title: '威胁 (Threats)',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      items: [
        {
          title: '人口结构变化',
          description: '老龄化程度加深、家庭小型化等趋势，对社区养老、托育等公共服务提出更高要求，资源压力增大。'
        },
        {
          title: '经济环境的不确定性',
          description: '地方财政压力可能影响社区建设的持续投入，需要探索更多元的资金筹措渠道。'
        },
        {
          title: '技术应用的伦理与安全风险',
          description: '智慧社区建设中的数据隐私保护、数字鸿沟等问题，可能引发新的社会矛盾。'
        }
      ]
    }
  ];

  const getQuadrantStyle = (quadrant) => {
    const baseStyle = "cursor-pointer transition-all duration-300 rounded-xl p-6 ";
    if (activeQuadrant === quadrant.id) {
      return baseStyle + `bg-gradient-to-br ${quadrant.color} text-white shadow-lg transform scale-105`;
    }
    return baseStyle + "bg-slate-800 text-slate-300 hover:bg-slate-700";
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
          <h1 className="text-5xl font-bold text-white mb-6">SWOT分析</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            从社区规划师的专业视角，对上海的社区治理现状进行战略评估
          </p>
        </motion.div>

        {/* SWOT Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {swotData.map((quadrant, index) => (
            <motion.div
              key={quadrant.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className={getQuadrantStyle(quadrant)}
              onClick={() => setActiveQuadrant(quadrant.id)}
            >
              <div className="flex items-center mb-4">
                {quadrant.icon}
                <h3 className="text-xl font-bold ml-3">{quadrant.title}</h3>
              </div>
              <div className="text-sm opacity-80">
                点击查看详细分析 ({quadrant.items.length} 项)
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Analysis */}
        <motion.div
          key={activeQuadrant}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center mb-8">
            <div className={`p-3 rounded-full bg-gradient-to-r ${swotData[activeQuadrant].color} text-white mr-4`}>
              {swotData[activeQuadrant].icon}
            </div>
            <h2 className="text-3xl font-bold text-white">{swotData[activeQuadrant].title}</h2>
          </div>

          <div className="space-y-6">
            {swotData[activeQuadrant].items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Implications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">战略启示</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">发挥优势，抓住机遇</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>利用强大的政策执行力，抓住数字化转型机遇，推进智慧社区建设</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>发挥社区规划师制度优势，满足居民日益增长的参与需求</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>整合高校和社会组织资源，推动城市更新内涵式发展</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">克服劣势，应对威胁</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>打破部门壁垒，建立协同机制，应对人口结构变化挑战</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>深化居民参与，建立可持续运营机制，防范技术应用风险</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>创新资金筹措模式，降低经济环境不确定性影响</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

