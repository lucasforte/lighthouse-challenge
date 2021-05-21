import React from 'react';

import PageContainer from './components/PageContainer';

const App = () => {
  return (
    <PageContainer>
      <Header />
      <Banner />
      <Presentation />
      <Combo />
      <Services />
    </PageContainer>
  );
}

export default App;
