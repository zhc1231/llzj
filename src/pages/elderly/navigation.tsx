import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type PageName =
  | 'home'
  | 'health'
  | 'aigc'
  | 'life'
  | 'assistant'
  | 'guandan-detail'
  | 'activity-detail'
  | 'service-detail'
  | 'news-detail'
  | 'health-data-detail'
  | 'ai-consult'
  | 'medication-detail'
  | 'appointment'
  | 'aigc-create'
  | 'work-detail'
  | 'tutorial-detail'
  | 'profile'
  | 'settings'
  | 'orders'
  | 'favorites'
  | 'wallet'
  | 'coupons';

interface NavContextType {
  currentPage: PageName;
  pageParams: Record<string, any>;
  navigate: (page: PageName, params?: Record<string, any>) => void;
  goBack: () => void;
  canGoBack: boolean;
}

const NavContext = createContext<NavContextType | null>(null);

export const NavProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stack, setStack] = useState<{ page: PageName; params: Record<string, any> }[]>([
    { page: 'home', params: {} },
  ]);

  const current = stack[stack.length - 1];

  const navigate = useCallback((page: PageName, params: Record<string, any> = {}) => {
    setStack((prev) => [...prev, { page, params }]);
  }, []);

  const goBack = useCallback(() => {
    setStack((prev) => {
      if (prev.length <= 1) return prev;
      return prev.slice(0, -1);
    });
  }, []);

  return (
    <NavContext.Provider
      value={{
        currentPage: current.page,
        pageParams: current.params,
        navigate,
        goBack,
        canGoBack: stack.length > 1,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error('useNav must be used within NavProvider');
  return ctx;
};
