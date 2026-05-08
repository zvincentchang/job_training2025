import React, { useState } from 'react';
import './App.css';

// interface可被擴充與繼承
interface TitleProps {
  name: string
}

interface TitleProps {
  isOpen: boolean
}

// Typescript可以避免資料類型所照成的錯誤
// React.FC<TitleProps> 表示為 React.FunctionComponent<P>
// 將TitleProps介面直接解構於參數列上
const Title: React.FC<TitleProps> = ({ name, isOpen }) => {  
  return (
    isOpen ? <h1>{name}</h1> : <h1>is close</h1>
  )
}

const App: React.FC = () => {

  const [title, setTitle] = useState<string>('Hello React Typescript');
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const changeTitle = () => {
    setTitle( (oldTitle: string) => (`${oldTitle} !!!`) );
  }

  const changeOpen = () => {
    setIsOpen( (isOpen: boolean) => !isOpen );
  }

  return (
    <div>
      <Title name={title} isOpen={isOpen} />
      <button onClick={changeTitle}>changeTitle</button>      
      <button onClick={changeOpen}>changeOpen</button>
    </div>
  );
}

export default App;
