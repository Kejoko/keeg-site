import { createGlobalStyle } from "styled-components";

import CompactaBoldItalicWoff from './Compacta Bold Italic BT V2.woff';
import CompactaBoldItalicWoff2 from './Compacta Bold Italic BT V2.woff2';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${CompactaBoldItalicWoff2}) format('woff2'),
        url(${CompactaBoldItalicWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

export default FontStyles;