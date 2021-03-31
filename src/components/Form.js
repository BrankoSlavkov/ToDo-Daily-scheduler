import React from 'react';

function Form({ todo, change, submit, error }) {
    return (
        <form onSubmit={submit}>
            <div className="form-group row">
                <div className="col-9">
                    <input type="text" value={todo} onChange={change} className={`form-control ${error ? 'is-invalid' : ''}`} />
                    {error && <small className="form-text text-danger">{error}</small>}
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-primary">
                        Add item
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;