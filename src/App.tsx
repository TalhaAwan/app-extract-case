import './App.css';
import Header from './Header';
import AppName from './AppName';
import ExtractCase from './ExtractCase';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pl-10 pr-10 pt-4 space-y-8 min-h-screen">
        <AppName />
        <ExtractCase />      
      </div>
      <Footer />
    </div>
  );
}

export default App;
