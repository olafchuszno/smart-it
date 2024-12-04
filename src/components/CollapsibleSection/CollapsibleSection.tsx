import React, { FC, ReactNode } from 'react'

interface IProps {
  isCollapsed: boolean;
  toggleIsCollapsed: () => void;
  title: string;
  children: ReactNode;
}

const CollapsibleSection: FC<IProps> = ({ isCollapsed, toggleIsCollapsed, title, children }) => {
  return (
    <section>
      <div style={{display: 'flex', gap: '20px'}}>
        <h1 style={{color: 'white'}}>{title}</h1>

        <button style={{color: 'white'}} onClick={toggleIsCollapsed}>{isCollapsed ? `\\/` : `/\\`}</button>
      </div>

      {!isCollapsed && <>{children}</>}
    </section>
  )
}

export default CollapsibleSection
