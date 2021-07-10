import { createGlobalStyle } from 'styled-components';
import JosefinSansRegular from '../assets/fonts/JosefinSans-Regular.ttf';
import JosefinSansSemiBold from '../assets/fonts/JosefinSans-SemiBold.ttf';
import JosefinSansBold from '../assets/fonts/JosefinSans-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'JosefinSans Regular';
    src: url(${JosefinSansRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'JosefinSans SemiBold';
    src: url(${JosefinSansSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'JosefinSans Bold';
    src: url(${JosefinSansBold});
    font-style: normal;
  }
  html{
    font-family: 'JosefinSans Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'JosefinSans Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'JosefinSans SemiBold'
  }

`;

export default Typography;
