import { createGlobalStyle } from "styled-components"

import GraphikRegular from "../assets/fonts/graphik-regular.woff"
import GraphikRegular2 from "../assets/fonts/graphik-regular.woff2"
import GraphikMedium from "../assets/fonts/graphik-medium.woff"
import GraphikMedium2 from "../assets/fonts/graphik-medium.woff2"
import GraphikBold from "../assets/fonts/graphik-bold.woff"
import GraphikBold2 from "../assets/fonts/graphik-bold.woff2"

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'graphik-001-web';
      src: url(${GraphikRegular2}) format('woff2'),
        url(${GraphikRegular}) format('woff');
      font-weight: 400;
    }

    @font-face {
      font-family: 'graphik-001-web';
      src: url(${GraphikMedium2}) format('woff2'),
        url(${GraphikMedium}) format('woff');
      font-weight: 500;
    }

    @font-face {
      font-family: 'graphik-001-web';
      src: url(${GraphikBold2}) format('woff2'),
        url(${GraphikBold}) format('woff');
      font-weight: 700;
    }

    ::selection {
      background-color: ${props => props.theme.colors.secondary};
      color: #fff;
    }

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }

    html {
      background-color: ${props => props.theme.colors.primary};

      &::-webkit-scrollbar {
        width: 4px;
      }
      &::-webkit-scrollbar-track {
        background: #fff;
      }
      &::-webkit-scrollbar-thumb {
        background: #000;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }

    body {
      font-family: 'graphik-001-web', system-ui, sans-serif;
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }

    a {
      text-decoration: none;
      color: inherit;
      text-decoration: underline;
    }

    p {
      margin: 0;
      padding: 0;
    }

  `
