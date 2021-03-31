import React from 'react';

function Layout({ children }) {
    return (
        <div className="container p-3 p-sm-1 mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-10 col-lg-7 col-xl-6">
                    <div className="card">
                        <div className="card-body">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
