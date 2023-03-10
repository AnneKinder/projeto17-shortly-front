import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 

			*{
				box-sizing: border-box;
				
			}

html, body, div, span, applet, object, iframe,
			h1, h2, h3, h4, h5, h6, p, blockquote, pre,
			a, abbr, acronym, address, big, cite, code,
			del, dfn, em, img, ins, kbd, q, s, samp,
			small, strike, strong, sub, sup, tt, var,
			b, u, i, center,
			dl, dt, dd, ol, ul, li,
			fieldset, form, label, legend,
			table, caption, tbody, tfoot, thead, tr, th, td,
			article, aside, canvas, details, embed, 
			figure, figcaption, footer, header, hgroup, 
			menu, nav, output, ruby, section, summary,
			time, mark, audio, video {
				margin: 0;
				padding: 0;
				border: 0;
				font-size: 100%;
				font: inherit;
				vertical-align: baseline;
			}
			/* HTML5 display-role reset for older browsers */
			article, aside, details, figcaption, figure, 
			footer, header, hgroup, menu, nav, section {
				display: block;
			}
			body {
				line-height: 1;
				font-family: 'Lexend Deca', sans-serif;
			}
			ol, ul {
				list-style: none;
			}
			blockquote, q {
				quotes: none;
			}
			blockquote:before, blockquote:after,
			q:before, q:after {
				content: '';
				content: none;
			}
			table {
				border-collapse: collapse;
				border-spacing: 0;
			}
			
			input{
				width:48%;
				height: 72px;
				border: 1px solid rgba(120, 177, 89, 0.25);
				box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
				border-radius: 12px;
				font-family: 'Lexend Deca';
				font-style: normal;
				font-weight: 400;
				font-size: 16px;
				line-height: 18px;
				color: #9C9C9C;
				padding-left:16px;
				margin-bottom: 25px;
  			}

			button{
				width: 9%;
				height: 60px;
				background: #5D9040;
				border-radius: 12px;
				font-family: 'Lexend Deca';
				font-style: normal;
				font-weight: 700;
				font-size: 16px;
				line-height: 18px;
				color: #FFFFFF;
				border-color: transparent;
				cursor: pointer;
			}

			form {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;  
				margin-top: 2%;
			}


`
export default GlobalStyle