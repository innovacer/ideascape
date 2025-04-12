import { Draggable } from 'react-beautiful-dnd';

export default function KanbanCard({ card, index }) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow"
        >
          <h3 className="text-md font-medium">{card.title}</h3>
        </div>
      )}
    </Draggable>
  );
}
