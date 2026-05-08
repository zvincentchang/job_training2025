import React, { useState } from 'react';

interface TitleProps {
  name: string
}

interface TitleProps {
  isOpen: boolean
}

const Title: React.FC<TitleProps> = ( {name, isOpen} ) => {
  return (
    isOpen ? <h1>{name}</h1> : <h1>is close</h1>
  )
};

function App() {

  const [title, setTitle] = useState<string>('Hello React Typescript');
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const changeTitle = () => {
    setTitle( (t: string) => (`${t} !!!`)  );
  }

  const changeOpen = () => {
    setIsOpen( (isOpen: boolean) => !isOpen );
  }

  return (
    <div>
      <Title name={title} isOpen={isOpen}/>
      <button onClick={changeTitle}>changeTitle</button>
      <button onClick={changeOpen}>changeOpen</button>
    </div>
  );
}

export default App;
