import React from 'react';
import Link from 'next/link';

const links = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
];

const Navigation = () => {
    return (
        <nav>
            <ul>
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
