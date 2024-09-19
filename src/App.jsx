import React from 'react';
import Navbar from './components/Navbar'; // Navbar component
import Header from './components/Header'; // Header with title and logo
import Features from './components/Features'; // Features section
import CTA from './components/CTA'; // Call to Action section
import Footer from './components/Footer'; // Footer section
import Testimonial from './components/Testimonial'; // Testimonials component
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

// App Component
const App = () => (
    <div>
        <Navbar />
        <Header />
        <Features />
        <CTA />
        <Testimonial />
        <Footer />
    </div>
);

export default App;
