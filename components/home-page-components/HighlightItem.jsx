import React from 'react';
import MainAppLayout from '../layout-components/MainAppLayout';

function HighlightItem({ children, icon }) {
  return (
    <div
      className="highlight-item flex w-full gap-4 p-4 md:p-6 dark:border rounded-lg"
      style={{ boxShadow: '0 0 26px -10px rgba(50, 50, 50, 0.4)' }}
    >
      <div
        className="btn--colors_rounded border p-[7px] rounded-full text--colors_primary"
        style={{ alignSelf: 'flex-start' }}
      >
        {icon}
      </div>
      <div className="highlight-text text--colors_secondary font-bold">{children}</div>
    </div>
  );
}

export default HighlightItem;
