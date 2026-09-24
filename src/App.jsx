import { ButtonGroup, Button } from '@heroui/react';
import './App.css';
import Counter from './components/Counter';
import { Dices } from './components/Dices';
import { Programs } from './components/Programs';
import { Todos } from './components/Todos';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState(null);

  const nap = 'kedd';
  const szam = '120';

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-3xl">
          First app
        </h1>

        <div className="flex flex-col items-center gap-6 p-10">
          <ButtonGroup>
            <Button onClick={() => setSelected('counter')}>
              Counter
            </Button>

            <Button onClick={() => setSelected('dice')}>
              Dice Roller
            </Button>

            <Button onClick={() => setSelected('programs')}>
              Programs
            </Button>

            <Button onClick={() => setSelected('todo')}>
              Todo
            </Button>
          </ButtonGroup>
        </div>

        {selected === 'counter' && <Counter />}

        {selected === 'dice' && <Dices />}

        {(selected === 'programs' || !selected) && <Programs />}

        {selected === 'todo' && <Todos />}
      </div>
    </>
  );
}

export default App;













