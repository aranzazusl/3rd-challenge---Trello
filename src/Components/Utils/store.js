const cards = [
    {
      id: 'card-1',
      title: 'Do 1st Challenge',
    },
    {
      id: 'card-2',
      title: 'Do 2nd Challenge',
    },
    {
      id: 'card-3',
      title: 'Do 3rd Challenge',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Todo',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'Doing',
        cards: [],
      },
    },
    listIds: ['list-1', 'list-2'],
  };
  
  export default data;