import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  text-decoration: none;
  list-style: none;
}

:root{
  --header-height: 60px;
}

img{
  width: 100%;
}

a{
  color: inherit;
}

::selection{
  background-color: rgb(255, 80, 0);
}

input{
  border: none;
}

button{
  border: none;

  cursor: pointer;
}

body{
  -moz-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  width: 100%;
  height: 100%;
  max-width: 100vw;
  
  position: relative;

  font-family: 'Agdasima', sans-serif;;

  background-color: #141414;
  }
`;
