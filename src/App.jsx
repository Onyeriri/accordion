import { createContext, useContext, useState } from 'react';
import questions from './data';
import Questions from './components/Questions';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const App = () => {
  const [data, setData] = useState(questions);
  const [isActiveId, setIsActiveId] = useState(null);

  const handleToggle = (id) => {
    const newActiveId = id === isActiveId ? null : id;

    setIsActiveId(newActiveId);
  }


  return <AppContext.Provider value={{data, handleToggle, isActiveId}}>
    <main>
      <Questions />
    </main>
    </AppContext.Provider>
};
export default App;
