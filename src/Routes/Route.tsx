import React from 'react';
import { RouteProps as ReactDomRouterProps , Route as ReactDomRoute,Redirect } from 'react-router-dom';

// import { Container } from './styles';
interface RouteProps extends ReactDomRouterProps{
    component:React.ComponentType;
}

const Route: React.FC<RouteProps> = ({component:Component,...rest}) => {    
  return (
      <ReactDomRoute
        {...rest}
        render={()=>{
            return (
                <Component/>            
            )
        }}
      />
  );
};

export default Route;