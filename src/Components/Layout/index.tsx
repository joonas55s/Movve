import React from 'react';
import Footer from '../Footer';
import { Grid } from './styles';


const Layout: React.FC = ({children}) => {
  return (
    <Grid>
      {children}
      <Footer/>
    </Grid>
  );
}

export default Layout;