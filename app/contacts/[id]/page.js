"use client";

import { Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useContactsContext } from "../../contexts/ContactsContext";

function ContactDetailContent() {
    const params = useParams();
    const { loading, getContactById } = useContactsContext();

    if (loading) return <p>Carregando...</p>;

    const contact = getContactById(params.contactId);

    if (!contact) {
        return (
            <main style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
                <p>Contato não encontrado.</p>
                <Link href="/">Voltar</Link>
            </main>
        );
    }

    return (
        <main style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
            <Link href="/">← Voltar</Link>
            <h1>{contact.name}</h1>
            <p>
                <strong>E-mail:</strong> {contact.email}
            </p>
            <p>
                <strong>Telefone:</strong> {contact.phone}
            </p>
            <p>
                <strong>Username:</strong> {contact.username}
            </p>
        </main>
    );
}

export default function ContactDetailPage() {
    return (
        <Suspense fallback={<p>Carregando...</p>}>
            <ContactDetailContent />
        </Suspense>
    );
}