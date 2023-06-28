import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

fetch('http://localhost:8080/api/content')
.then((response: Response) => response.json())
.then((data: any) => console.log(data));

