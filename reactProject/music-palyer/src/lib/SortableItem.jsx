import React, { useRef } from "react";

const SortableItem = ({
  index,
  draggalbe,
  children,
  onDragStart,
  onDropItem,
  onClickItem,
}) => {
  const itemRef = useRef(null);
  const onDragStartItem = () => {
    itemRef.current.classList.add("dragstart");
    onDragStart(index);
  };
  const onDragEnd = () => {
    itemRef.current.classList.remove("dragstart");
  };

  const onDragEnter = () => {
    itemRef.current.classList.add("dragover");
  };
  const onDragLeave = () => {
    itemRef.current.classList.remove("dragover");
  };

  const onDragOver = (e) => e.prevantDefault();

  const onDrop = () => {
    itemRef.current.classList.remove("dragover");
    onDropItem(index);
  };

  const onClick = () => onClickItem(index);
  return (
    <li
      ref={itemRef}
      className="item"
      draggable={draggalbe ? draggalbe : false}
      onDragStart={onDragStartItem}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default SortableItem;
