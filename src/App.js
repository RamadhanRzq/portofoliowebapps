import fotoku from './assets/Foto.png'
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div className='flex gap-96 justify-center items-center min-h-screen'>
      <TypeAnimation sequence={[
        'Ramadhan Rizqi Saputra',
        1000, 
        'Software Engineer',
        1000,
      ]}
      speed={25}
      style={{ fontSize: '2em'}}
      repeat={2}
      />
      <img src={fotoku} alt="img" width={250} height={200} className='rounded-xl'/>
    </div>
  );
}

export default App;
