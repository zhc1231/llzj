import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrototypeHome from '@/pages/PrototypeHome';
import ElderlyApp from '@/pages/elderly/ElderlyApp';
import FamilyMiniApp from '@/pages/family/FamilyMiniApp';
import ProviderWorkbench from '@/pages/provider/ProviderWorkbench';
import GovernmentDashboard from '@/pages/government/GovernmentDashboard';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 原型展示主页 */}
        <Route path="/" element={<PrototypeHome />} />
        
        {/* 老人端APP */}
        <Route path="/elderly" element={<ElderlyApp />} />
        
        {/* 子女端小程序 */}
        <Route path="/family" element={<FamilyMiniApp />} />
        
        {/* 服务商端工作台 */}
        <Route path="/provider" element={<ProviderWorkbench />} />
        
        {/* 政府管理后台 */}
        <Route path="/government" element={<GovernmentDashboard />} />
        
        {/* 默认路由 */}
        <Route path="*" element={<PrototypeHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;