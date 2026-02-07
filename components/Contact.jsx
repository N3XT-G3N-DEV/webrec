import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(formData);
    };

    return (
        <section style={{ padding: '2rem' }}>
            <h2>Contact Us</h2>
            <p>Share your details and we will get back to you.</p>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem', maxWidth: '400px' }}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                </label>
                <label>
                    Message
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                </label>
                <button type="submit" className="button">
                    Send
                </button>
            </form>

            {submitted && (
                <div style={{ marginTop: '1.5rem', padding: '1rem', border: '1px solid #333' }}>
                    <h3>Submitted details</h3>
                    <p><strong>Name:</strong> {submitted.name}</p>
                    <p><strong>Email:</strong> {submitted.email}</p>
                    <p><strong>Message:</strong> {submitted.message}</p>
                </div>
            )}
        </section>
    );
};

export default Contact;
