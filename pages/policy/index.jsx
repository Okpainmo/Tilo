import React from 'react';
import MainAppLayout from '../../components/layout-components/MainAppLayout';
import PolicyContent from '../../components/policy-page-components/PolicyContent';

function PolicyPage() {
  return (
    <MainAppLayout>
      <main className="px-3 w-full xsm:w-10/12 xsm:mx-auto lg:w-3/5 ">
        <h1 className="text-center text--colors_primary text-3xl md:text-4xl mb-4 font-bold">
          Transparency
        </h1>
        <PolicyContent />
      </main>
    </MainAppLayout>
  );
}

export default PolicyPage;
