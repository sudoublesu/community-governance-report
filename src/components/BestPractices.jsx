import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Lightbulb, Award } from 'lucide-react';

export default function BestPractices() {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 0,
      title: '杨浦区"睦邻家园"与社区规划师联动机制',
      location: '杨浦区',
      icon: <Users className="w-6 h-6" />,
      description: '充分利用同济大学等高校资源，率先建立社区规划师制度',
      keyFeatures: [
        '社区规划师 + 社区微治理的联动模式',
        '专业设计与居民自治紧密结合',
        '创智农园项目成为典型案例',
        '消极空间转化为充满活力的"熟人社区"'
      ],
      coreValue: '专业赋能+社区共创',
      impact: '实现了从空间改造到社群关系重塑的升华',
      details: {
        background: '杨浦区作为上海的老工业区，面临着大量老旧社区更新的挑战。依托同济大学等高校的专业资源优势，杨浦区在全国率先建立了社区规划师制度。',
        innovation: [
          '建立"1+1+N"工作模式：1名责任规划师+1名社区规划师+N名专业志愿者',
          '创新"社区规划师工作站"，为专业服务提供平台支撑',
          '探索"微更新+微治理"相结合的社区营造模式',
          '形成"政府引导、专业支撑、居民参与、社会协同"的工作格局'
        ],
        results: [
          '累计完成社区微更新项目200余个',
          '培养社区规划师队伍300余人',
          '服务覆盖全区12个街道、100多个社区',
          '居民满意度达到90%以上'
        ]
      }
    },
    {
      id: 1,
      title: '长宁区新华路街道的"社区营造中心"',
      location: '长宁区新华路街道',
      icon: <Lightbulb className="w-6 h-6" />,
      description: '建立开放、共享的社区营造中心，为各类社区活动和自组织提供平台支持',
      keyFeatures: [
        '以"温暖的大橘子"为IP形象',
        '寓意"聚"集人气的理念',
        '举办超过600场社区活动',
        '有效激发社区内生动力'
      ],
      coreValue: '平台思维+持续运营',
      impact: '实现了从政府"输血"到社区"造血"的转变',
      details: {
        background: '新华路街道作为长宁区的核心区域，居民构成多元化，社区需求多样化。街道通过建立社区营造中心，为不同群体提供交流互动的平台。',
        innovation: [
          '打造"温暖的大橘子"品牌IP，增强社区认同感',
          '建立"社区营造师"队伍，专业化运营社区活动',
          '创新"社区合伙人"机制，吸引多元主体参与',
          '构建"线上+线下"融合的社区服务体系'
        ],
        results: [
          '年均举办各类活动600余场',
          '培育社区自组织50余个',
          '吸引志愿者参与3000余人次',
          '社区归属感显著提升'
        ]
      }
    },
    {
      id: 2,
      title: '浦东新区洋泾街道的"五全"工作法',
      location: '浦东新区洋泾街道',
      icon: <Award className="w-6 h-6" />,
      description: '探索出"全域规划、全民动员、全员参与、全效把控、全面管理"的工作法',
      keyFeatures: [
        '全域规划：统筹考虑整个街道的发展',
        '全民动员：广泛发动居民群众参与',
        '全员参与：各类主体共同参与治理',
        '全效把控：全过程质量控制',
        '全面管理：建立长效管理机制'
      ],
      coreValue: '系统治理+精细管理',
      impact: '为超大城市街道层面的综合治理提供了样板',
      details: {
        background: '洋泾街道作为浦东新区的老街道，在推进"15分钟社区生活圈"建设中，面临着统筹协调难度大、居民需求多样化等挑战。',
        innovation: [
          '建立"五全"工作体系，确保工作的系统性和完整性',
          '创新"社区规划师+居民代表+专业机构"的协同模式',
          '构建"发现问题-研究方案-组织实施-效果评估"的闭环机制',
          '形成"党建引领、政府主导、社会参与、居民自治"的治理格局'
        ],
        results: [
          '建成15分钟社区生活圈示范点10个',
          '完成老旧小区改造30余个',
          '新增公共服务设施50余处',
          '居民生活便利度显著提升'
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
          <h1 className="text-5xl font-bold text-white mb-6">标杆案例</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            上海在探索社区治理创新的道路上，涌现出一批具有示范意义的优秀案例
          </p>
        </motion.div>

        {/* Case Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12"
        >
          {cases.map((caseItem) => (
            <button
              key={caseItem.id}
              onClick={() => setActiveCase(caseItem.id)}
              className={`flex items-center space-x-2 px-4 py-3 m-2 rounded-full font-medium transition-all duration-300 ${
                activeCase === caseItem.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {caseItem.icon}
              <span className="text-sm">{caseItem.location}</span>
            </button>
          ))}
        </motion.div>

        {/* Case Content */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 rounded-2xl p-8 md:p-12"
        >
          {/* Case Header */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-orange-400 mr-3" />
              <span className="text-orange-400 font-medium">{cases[activeCase].location}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{cases[activeCase].title}</h2>
            <p className="text-lg text-slate-300 mb-6">{cases[activeCase].description}</p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <span className="text-slate-400 mr-2">核心价值:</span>
                <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                  {cases[activeCase].coreValue}
                </span>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">核心特征</h3>
              <div className="space-y-3">
                {cases[activeCase].keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">实践影响</h3>
              <div className="bg-slate-700 rounded-lg p-6">
                <p className="text-slate-300 leading-relaxed">{cases[activeCase].impact}</p>
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="space-y-8">
            {/* Background */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="text-lg font-semibold text-orange-400 mb-3">项目背景</h4>
              <p className="text-slate-300 leading-relaxed">{cases[activeCase].details.background}</p>
            </div>

            {/* Innovation */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">创新举措</h4>
              <div className="space-y-2">
                {cases[activeCase].details.innovation.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-semibold text-green-400 mb-3">实施成效</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {cases[activeCase].details.results.map((result, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">{result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Common Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">共同经验启示</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">专业引领</h3>
              <p className="text-slate-300">
                充分发挥专业力量的作用，通过社区规划师等专业人才，为社区治理提供技术支撑和智力支持。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">创新机制</h3>
              <p className="text-slate-300">
                在工作机制、组织模式、服务方式等方面不断创新，形成了具有地方特色的治理模式。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">持续运营</h3>
              <p className="text-slate-300">
                建立长效运营机制，确保项目的可持续发展，从"建设"向"运营"转变。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

