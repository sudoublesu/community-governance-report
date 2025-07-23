import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Clock, Users, Smartphone, Award, TrendingUp } from 'lucide-react';

export default function ShanghaiStatus() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 0,
      title: '发展历程',
      icon: <Clock className="w-5 h-5" />,
      content: {
        title: '上海社区治理发展历程',
        timeline: [
          {
            period: '1990s-2000s',
            title: '睦邻中心建设',
            description: '率先探索社区服务设施建设，为居民提供便民服务',
            achievements: ['建立社区服务网络', '完善基础设施配套', '提升服务便民水平']
          },
          {
            period: '2000s-2010s',
            title: '社区治理创新',
            description: '推进社区治理体制机制创新，加强基层民主建设',
            achievements: ['完善居民自治', '创新议事协商', '加强社区党建']
          },
          {
            period: '2010s-现在',
            title: '15分钟生活圈',
            description: '全面推进15分钟社区生活圈建设，提升居民生活品质',
            achievements: ['系统规划设计', '社区规划师制度', '数字化治理平台']
          }
        ]
      }
    },
    {
      id: 1,
      title: '15分钟生活圈',
      icon: <Building className="w-5 h-5" />,
      content: {
        title: '15分钟社区生活圈建设',
        overview: '以居民步行15分钟可达为基本要求，统筹配置各类社区服务设施，构建便民惠民服务圈',
        keyFeatures: [
          {
            category: '基本服务',
            items: ['社区卫生服务中心', '幼儿园', '小学', '菜市场', '便民商业']
          },
          {
            category: '品质服务',
            items: ['图书馆', '文化活动中心', '体育健身设施', '养老服务设施']
          },
          {
            category: '特色服务',
            items: ['创新创业空间', '特色商业街区', '文化创意空间', '社区花园']
          }
        ],
        achievements: [
          '已建成示范性15分钟社区生活圈100个',
          '覆盖常住人口超过500万人',
          '居民满意度达到85%以上',
          '形成可复制推广的建设模式'
        ]
      }
    },
    {
      id: 2,
      title: '社区规划师制度',
      icon: <Users className="w-5 h-5" />,
      content: {
        title: '社区规划师制度创新',
        background: '在全国率先建立并推广社区规划师制度，有效链接了专业知识与基层需求，提升了社区更新的品质',
        model: {
          structure: '1+1+N模式',
          description: '1名责任规划师+1名社区规划师+N名专业志愿者',
          coverage: '已覆盖全市16个区、200多个街镇、1000多个社区'
        },
        roles: [
          {
            role: '责任规划师',
            responsibilities: ['统筹协调', '技术指导', '质量把控', '资源整合']
          },
          {
            role: '社区规划师',
            responsibilities: ['深入社区', '需求调研', '方案设计', '实施跟踪']
          },
          {
            role: '专业志愿者',
            responsibilities: ['专业支撑', '技术服务', '知识普及', '能力建设']
          }
        ]
      }
    },
    {
      id: 3,
      title: '数字化基础',
      icon: <Smartphone className="w-5 h-5" />,
      content: {
        title: '数字化治理基础',
        platforms: [
          {
            name: '一网通办',
            description: '政务服务数字化平台',
            features: ['在线办事', '移动端服务', '一站式办理', '跨部门协同'],
            impact: '累计办件量超过1亿件，好评率99%以上'
          },
          {
            name: '一网统管',
            description: '城市运行管理平台',
            features: ['实时监测', '智能预警', '快速响应', '闭环管理'],
            impact: '处置各类事件超过1000万件，平均处置时间缩短30%'
          }
        ],
        innovations: [
          '社区大脑建设试点',
          '智慧社区管理平台',
          '居民服务APP应用',
          '物联网感知网络'
        ]
      }
    },
    {
      id: 4,
      title: '成就与经验',
      icon: <Award className="w-5 h-5" />,
      content: {
        title: '成就与经验总结',
        achievements: [
          {
            title: '制度创新',
            description: '社区规划师制度在全国推广，成为社区治理创新的重要经验',
            metrics: '已有20多个城市学习借鉴上海经验'
          },
          {
            title: '服务提升',
            description: '15分钟社区生活圈建设显著提升了居民生活便利度',
            metrics: '居民对社区服务满意度提升15个百分点'
          },
          {
            title: '数字赋能',
            description: '数字化治理平台提升了社区管理效率和服务水平',
            metrics: '社区事务处理效率提升40%以上'
          }
        ],
        experiences: [
          '坚持党建引领，发挥基层党组织核心作用',
          '注重专业支撑，引入规划师等专业力量',
          '强化居民参与，构建共建共治共享格局',
          '推进数字赋能，提升治理现代化水平'
        ]
      }
    },
    {
      id: 5,
      title: '面临挑战',
      icon: <TrendingUp className="w-5 h-5" />,
      content: {
        title: '面临的挑战',
        challenges: [
          {
            category: '人口结构变化',
            issues: [
              '老龄化程度加深，养老服务需求激增',
              '家庭小型化趋势，传统邻里关系弱化',
              '新市民融入需求，社区包容性待提升'
            ]
          },
          {
            category: '空间资源约束',
            issues: [
              '中心城区土地资源稀缺，设施配置困难',
              '老旧小区改造复杂，利益协调难度大',
              '公共空间不足，居民活动场所有限'
            ]
          },
          {
            category: '治理能力提升',
            issues: [
              '基层治理力量相对薄弱，专业化水平待提高',
              '居民参与积极性不高，共治格局需完善',
              '数字化应用深度不够，智能化水平需提升'
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
          <h1 className="text-5xl font-bold text-white mb-6">上海现状</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            上海作为中国的超大城市，其社区治理始终走在全国前列，积累了丰富的实践经验
          </p>
        </motion.div>

        {/* Section Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center space-x-2 px-4 py-2 m-1 rounded-full font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {section.icon}
              <span className="text-sm">{section.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Section Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 rounded-2xl p-8 md:p-12"
        >
          {/* Development History */}
          {activeSection === 0 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{sections[0].content.title}</h2>
              <div className="space-y-8">
                {sections[0].content.timeline.map((period, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-orange-400 font-semibold">{period.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{period.title}</h3>
                    <p className="text-slate-300 mb-4">{period.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {period.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 15-minute Circle */}
          {activeSection === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{sections[1].content.title}</h2>
              <p className="text-lg text-slate-300 mb-8">{sections[1].content.overview}</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {sections[1].content.keyFeatures.map((feature, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-orange-400 mb-4">{feature.category}</h4>
                    <div className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <span className="text-slate-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">建设成果</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {sections[1].content.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-orange-400" />
                      <span className="text-slate-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Community Planner System */}
          {activeSection === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{sections[2].content.title}</h2>
              <p className="text-lg text-slate-300 mb-8">{sections[2].content.background}</p>
              
              <div className="bg-slate-700 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-orange-400 mb-4">组织模式</h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">{sections[2].content.model.structure}</div>
                  <p className="text-slate-300 mb-4">{sections[2].content.model.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-full">
                    <span className="font-medium">{sections[2].content.model.coverage}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {sections[2].content.roles.map((roleInfo, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">{roleInfo.role}</h4>
                    <div className="space-y-2">
                      {roleInfo.responsibilities.map((resp, respIndex) => (
                        <div key={respIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <span className="text-slate-300 text-sm">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Digital Foundation */}
          {activeSection === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{sections[3].content.title}</h2>
              
              <div className="space-y-8 mb-8">
                {sections[3].content.platforms.map((platform, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-orange-400 mb-3">{platform.name}</h4>
                    <p className="text-slate-300 mb-4">{platform.description}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-white font-medium mb-2">核心功能</h5>
                        <div className="space-y-1">
                          {platform.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                              <span className="text-slate-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-white font-medium mb-2">应用成效</h5>
                        <p className="text-slate-300 text-sm">{platform.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">创新应用</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {sections[3].content.innovations.map((innovation, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-orange-400" />
                      <span className="text-slate-300">{innovation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Achievements */}
          {activeSection === 4 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{sections[4].content.title}</h2>
              
              <div className="space-y-6 mb-8">
                {sections[4].content.achievements.map((achievement, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-orange-400 mb-3">{achievement.title}</h4>
                    <p className="text-slate-300 mb-3">{achievement.description}</p>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-orange-400" />
                      <span className="text-white font-medium">{achievement.metrics}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">核心经验</h4>
                <div className="space-y-3">
                  {sections[4].content.experiences.map((exp, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-slate-300">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Challenges */}
          {activeSection === 5 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{sections[5].content.title}</h2>
              
              <div className="space-y-8">
                {sections[5].content.challenges.map((challenge, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-xl font-semibold text-red-400 mb-4">{challenge.category}</h4>
                    <div className="space-y-3">
                      {challenge.issues.map((issue, issueIndex) => (
                        <div key={issueIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

