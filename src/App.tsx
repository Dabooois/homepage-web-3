import Banner from './components/Banner';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Banner />
        <Card />
      </main>
    </div>
  );
}

export default App;
