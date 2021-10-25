import React from 'react';

import './style.scss';
import oRecipesLogo from 'src/assets/logo.png';

const AppHeader = () => {

  return (
    <header className="header">
      <img src={oRecipesLogo} className="header-logo" alt="Logo oRecipes" />
    </header>
  );
}

export default AppHeader;
