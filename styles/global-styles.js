import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
${normalize}
html, body {
  font-family: Segoe UI, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  color: black;
  height: 100%;
  font-size: 14px;
  margin: 0;
  padding: 0;   
}

body::-webkit-scrollbar {
  display: none;
}

p {
  margin: 0;
}

a {
  text-decoration: none;
  color: #0969da;
}

a:hover {
  text-decoration: underline;
}

.emoji {
  height: 1em;
}

pre {
  overflow: auto;
  background-color: #f6f8fa !important;
  border-radius: 6px;
}

code {
  background-color: #f6f8fa !important;
}
`;
