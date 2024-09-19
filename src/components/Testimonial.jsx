import React from 'react';

const Testimonial = () => (
    <section className="testimonials py-5 bg-light">
        <div className="container">
            <h2 className="text-center mb-5">What people are saying...</h2>
            <div className="row">
                <div className="col-md-4 text-center">
                    <img src="/images/margaret.jpg" alt="Margaret E." className="mb-3 rounded-circle" style={{ width: '100px', height: '100px' }} />
                    <h5>Margaret E.</h5>
                    <p>"This is fantastic! Thanks so much guys!"</p>
                </div>
                <div className="col-md-4 text-center">
                    <img src="/images/fred.jpg" alt="Fred S." className="mb-3 rounded-circle" style={{ width: '100px', height: '100px' }} />
                    <h5>Fred S.</h5>
                    <p>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                </div>
                <div className="col-md-4 text-center">
                    <img src="/images/sarah.jpg" alt="Sarah W." className="mb-3 rounded-circle" style={{ width: '100px', height: '100px' }} />
                    <h5>Sarah W.</h5>
                    <p>"Thanks so much for making these free resources available to us!"</p>
                </div>
            </div>
        </div>
    </section>
);

export default Testimonial;
