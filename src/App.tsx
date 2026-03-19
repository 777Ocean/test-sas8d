import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-blue-50 dark:from-dark dark:to-gray-800 text-dark dark:text-light">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">个人主页</h1>
            
            {/* 桌面端导航 */}
            <div className="hidden md:flex space-x-4">
              <a href="#about" className="hover:text-primary transition-colors">关于我</a>
              <a href="#skills" className="hover:text-primary transition-colors">技能</a>
              <a href="#experience" className="hover:text-primary transition-colors">经历</a>
              <a href="#projects" className="hover:text-primary transition-colors">项目</a>
              <a href="#contact" className="hover:text-primary transition-colors">联系方式</a>
            </div>

            {/* 移动端汉堡菜单按钮 */}
            <button 
              className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* 移动端菜单 */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#about" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>关于我</a>
              <a href="#skills" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>技能</a>
              <a href="#experience" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>经历</a>
              <a href="#projects" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>项目</a>
              <a href="#contact" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>联系方式</a>
            </div>
          )}
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">你好，我是 <span className="text-primary">[姓名]</span></h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-600 dark:text-gray-300">[大学] [学院] [专业] [年级]学生</p>
          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">前端开发学习者</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">数据分析爱好者</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm">保研备考中</span>
          </div>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <a href="#contact" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">联系我</a>
            <a href="#projects" className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">查看项目</a>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=placeholder%20portrait%2C%20generic%20person%2C%20silhouette%2C%20neutral%2C%20professional&image_size=square_hd" 
                alt="个人头像" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white p-3 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 关于我 */}
      <section id="about" className="container mx-auto px-4 py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-gray-800/50 rounded-2xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">关于我</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-primary">校园背景</h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm sm:text-base">[大学] [学院] [专业]</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base">2022级 | 预计2026年毕业</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm sm:text-base">本科学历</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-primary">核心课程</h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base">数据结构（95分）</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base">操作系统（92分）</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base">机器学习（90分）</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base">计算机网络（88分）</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base">数据库原理（89分）</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 专业技能 */}
      <section id="skills" className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">专业技能</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Python</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">熟练</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">SQL</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">掌握</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">HTML/CSS</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">基础</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Matlab</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">了解</p>
          </div>
        </div>
      </section>

      {/* 经历 */}
      <section id="experience" className="container mx-auto px-4 py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-gray-800/50 rounded-2xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">校园实践与获奖</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-primary">校园实践</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/80 dark:bg-gray-700/80 p-3 sm:p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-sm sm:text-base">[学院]学生会宣传部部长</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">2023-2024</p>
                <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm sm:text-base">负责学院活动宣传策划，组织过10+场校园活动，参与人数超过1000人。</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-700/80 p-3 sm:p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-sm sm:text-base">班级学习委员</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">2022 - 至今</p>
                <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm sm:text-base">组织班级学习小组，提高班级整体成绩，班级挂科率下降30%。</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-700/80 p-3 sm:p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-sm sm:text-base">[公司]产品部实习生</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">2024.07-2024.09</p>
                <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm sm:text-base">负责用户调研和需求整理，参与产品功能设计，提交3份详细的用户调研报告。</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-primary">获奖成果</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/80 dark:bg-gray-700/80 p-3 sm:p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-sm sm:text-base">全国大学生数学建模竞赛 省级二等奖</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">2024</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-700/80 p-3 sm:p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-sm sm:text-base">校级一等奖学金</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">2022-2023学年</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-700/80 p-3 sm:p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-sm sm:text-base">三好学生</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">2023</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-700/80 p-3 sm:p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-sm sm:text-base">CET-6（580+）</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 项目 */}
      <section id="projects" className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">项目与学习成果</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-32 sm:h-40 bg-blue-100 dark:bg-blue-900 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">图书管理系统</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">课程设计项目，使用Java+MySQL开发，负责后端接口开发。</p>
            <a href="#" className="text-primary hover:underline text-sm sm:text-base">查看详情</a>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-32 sm:h-40 bg-green-100 dark:bg-green-900 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">校园二手交易平台原型设计</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">个人作业，使用Figma完成需求分析和页面设计。</p>
            <a href="#" className="text-primary hover:underline text-sm sm:text-base">查看详情</a>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-32 sm:h-40 bg-yellow-100 dark:bg-yellow-900 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">参与机器学习方向辅助研究</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">参与[教授]课题组，负责数据预处理和模型训练。</p>
            <a href="#" className="text-primary hover:underline text-sm sm:text-base">查看详情</a>
          </div>
        </div>
      </section>

      {/* 个性化信息 */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-gray-800/50 rounded-2xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">个人特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-primary">兴趣爱好</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs sm:text-sm">编程</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs sm:text-sm">阅读</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-xs sm:text-sm">校园跑</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-xs sm:text-sm">辩论赛</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-full text-xs sm:text-sm">摄影</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-primary">个人理念</h3>
            <p className="text-gray-700 dark:text-gray-200 italic text-sm sm:text-base">"在学习中试错，在实践中成长"</p>
            <p className="text-gray-700 dark:text-gray-200 italic mt-2 text-sm sm:text-base">"专注专业学习，也热爱校园生活"</p>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">联系方式</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">邮箱</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base break-all">[邮箱地址]</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base break-all">github.com/[用户名]</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">微信</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">备注：仅交流学习</p>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="container mx-auto px-4 py-6 sm:py-8 text-center text-gray-600 dark:text-gray-300">
        <p className="text-xs sm:text-sm">© 2026 [姓名]个人主页 | 大学生个人展示平台</p>
      </footer>
    </div>
  );
}

export default App;