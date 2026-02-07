import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Webrec. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
