'use client';

import React from 'react';
import ArrowBack from '@/public/svgs/arrow-back.svg';

const PageHeader = ({
  title = 'Registry Application',
  btnLabel = 'Back',
}: {
  title?: string;
  btnLabel?: string;
}) => {
  return (
    <nav className="flex items-center gap-[1.625rem] text-white">
      <button className="flex items-center rounded-[1.5rem] bg-[#2A2929] px-2 py-1">
        <ArrowBack /> <p className="text-body text-[#FAFAFA80]">{btnLabel}</p>
      </button>

      <h4 className="text-h-4">{title}</h4>
    </nav>
  );
};

export { PageHeader };
