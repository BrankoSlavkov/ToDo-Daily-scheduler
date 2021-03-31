import React from 'react';
import ListItem from './ListItem';

function Lists({ todoList }) {

    if (!todoList.length) {
        return (
            <div className="jumbotron text-center">
                <h1 className="text-danger">No Todo Found</h1>
                <h4></h4>
            </div>
        );
    }

    return (
        <div className="listWrap">
            <ul className="list-group">
                {todoList && todoList.map(todo => (
                    <ListItem
                        id={todo.id}
                        key={todo.id}
                        title={todo.title}
                        done={todo.done}
                    />
                ))}
            </ul>

        </div>
    );
}

export default Lists;
