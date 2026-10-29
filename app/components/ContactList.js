"use client";

import ContactItem from "./ContactItem";

export default function ContactList({ contacts }) {
    if (!contacts || contacts.length === 0) {
        return <p>Nenhum contato encontrado.</p>;
    }

    return (
        <ul>
            {contacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </ul>
    );
}