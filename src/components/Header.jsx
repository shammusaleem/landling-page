import React from 'react';

const Header = () => (
    <header className="text-white text-center py-5">
        <div className="container">
            <h1 className="masthead-heading text-uppercase mt-3">Generate more leads with a professional landing page!</h1>
            <form className="header-form">
                <input type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                <button type="submit" className="btn btn-light">Submit</button>
            </form>
        </div>
    </header>
);

export default Header;
