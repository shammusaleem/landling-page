import React from 'react';

const Features = () => (
    <section id="features" class="py-5 text-center bg-light">
    <div class="container">
        <div class="row">
            <div class="col-md-4 d-flex flex-column align-items-center">
                <img src="/images/folder.jpg" alt="Fully Responsive" class="mb-3" style="width: 60px; height: 60px;"/>
                <h4>Fully Responsive</h4>
                <p>This theme will look great on any device, no matter the size!</p>
            </div>
            <div class="col-md-4 d-flex flex-column align-items-center">
                <img src="/images/folder2.jpg" alt="Bootstrap 5 Ready" class="mb-3" style="width: 60px; height: 60px;"/>
                <h4>Bootstrap 5 Ready</h4>
                <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
            </div>
            <div class="col-md-4 d-flex flex-column align-items-center">
                <img src="/images/folder3.jpg" alt="Easy to Use" class="mb-3" style="width: 60px; height: 60px;"/>
                <h4>Easy to Use</h4>
                <p>Ready to use with your own content, or customize the source files!</p>
            </div>
        </div>
    </div>
</section>
);

export default Features;
