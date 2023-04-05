
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <>
      <Navbar />
      <div className='p-5'>
        <TextForm />
      </div>
    </>
  );
}

export default App;
