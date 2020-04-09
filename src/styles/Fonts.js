import { createGlobalStyle } from "styled-components";

import ShareBoldItalic from "./fonts/Share-BoldItalic.ttf";

const FontStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;
    @import url('https://fonts.googleapis.com/css2?family=Share:ital,wght@0,400;0,700;1,400;1,700&display=swap');;
    
    @font-face {
        font-family: 'Share';
        src: local('Share'), url(./fonts/Share-BoldItalic.ttf) format('truetype');
    }
    
    body {
        font-family: 'Montserrat', 'Share', sans-serif;
    }
`;

export default FontStyles;