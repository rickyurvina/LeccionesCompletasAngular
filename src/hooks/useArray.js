import { useState } from 'react';

const useArray = (array) => {
    const [data, setData] = useState(array);
    const [showAllComplete, setShowAllComplete]= useState(true);
    return {
      data,
      setData,
      showAllComplete,
      setShowAllComplete,
      add: (e) => setData((value) => value.concat(e)),
      completed: (id) =>
        setData((arr) => {
          return arr.map((e) =>
            e.id === id ? { ...e, completed: !e.completed } : e
          );
        }),
        completeAll: () => setData(arr => arr.map(lesson => 
            ({...lesson, completed: showAllComplete})))
    };
  };

  export default useArray;