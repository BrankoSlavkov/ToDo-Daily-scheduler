import React, { useContext } from 'react';
import { ListContext } from '../App';

function ListItem({ id, title, done }) {
    const clickHandler = useContext(ListContext),
        deleteHandler = () => clickHandler.deleteHandler(id),
        doneHandler = () => clickHandler.doneHandler(id);

    return (
        <li className={`list-group-item d-flex justify-content-between${done ? ' bg-success' : ''}`}>
            {done ? <del>{title}</del> : title}
            <div>
                <button className="btn btn-sm btn-danger mr-2" onClick={deleteHandler}>
                    <i className="far fa-trash-alt"></i>
                </button>
                <button className={`btn btn-sm ${done ? 'btn-warning' : 'btn-success'}`} onClick={doneHandler}>
                    {done ? (
                        <i className={`fas fa-undo-alt`}></i>
                    ) : (
                        <i className="fas fa-check"></i>
                    )}
                </button>
            </div>
        </li>
    );
}

export default ListItem;
