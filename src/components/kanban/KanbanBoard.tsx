import { DragDropContext } from 'react-beautiful-dnd';
import KanbanColumn from './KanbanColumn';
import { useState } from 'react';

const initialData = {
  columns: {
    'todo': { id: 'todo', title: 'To Think About', cards: [] },
    'progress': { id: 'progress', title: 'In Progress', cards: [] },
    'completed': { id: 'completed', title: 'Completed', cards: [] }
  },
  columnOrder: ['todo', 'progress', 'completed']
};

export default function KanbanBoard() {
  const [data, setData] = useState(initialData);

  function onDragEnd(result) {
    if (!result.destination) return;

    const sourceColumn = data.columns[result.source.droppableId];
    const destColumn = data.columns[result.destination.droppableId];

    const [removed] = sourceColumn.cards.splice(result.source.index, 1);
    destColumn.cards.splice(result.destination.index, 0, removed);

    setData({ ...data });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 p-4 overflow-x-auto">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          return <KanbanColumn key={column.id} column={column} />;
        })}
      </div>
    </DragDropContext>
  );
}
