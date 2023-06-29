import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

fetch('http://localhost:8080/api/content')
  .then((response: Response) => response.json())
  .then((data: any) => {
    const rootElement = document.getElementById('root');
    const preElement = document.createElement('pre');
    preElement.textContent = JSON.stringify(data, null, 2);
    rootElement?.appendChild(preElement);
  })
  .catch((error: any) => {
    console.error('Error fetching data:', error);
  });
