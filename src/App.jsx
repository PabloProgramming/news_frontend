import './App.css'
import { Header } from './components/Header'
import { RoutesApp } from './components/RoutesApp'
import { UserProvider } from './contexts/UserContex';

function App() {

  return (
    <>
      <UserProvider>
        <Header />
        <RoutesApp />
      </UserProvider>
    </>
  );
}

export default App


