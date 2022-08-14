import { Main } from './components/styled-component';
import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';
import './accets/style/style.css'
function App() {
  return (
    <Main>
      <Sidebar/>
      <Content />
    </Main>
  )
}

export default App;
