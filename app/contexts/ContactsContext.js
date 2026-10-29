"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
} from "react";

import contactsApi from "../services/ContactsApi.js";


const ContactsContext = createContext();

export const useContactsContext = () => {
    const context = useContext(ContactsContext);
    if (!context) {
        throw new Error(
            "useContactsContext deve ser usado dentro de ContactsProvider"
        );
    }
    return context;
};

export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchContacts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await contactsApi.get("/users");
            setContacts(response.data);
        } catch (err) {
            setError("Falha ao carregar contatos");
            console.log(err)
            setContacts([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    const getContactById = useCallback(
        (id) => {
            return contacts.find((c) => String(c.id) === String(id));
        },
        [contacts]
    );

    return (
        <ContactsContext.Provider value={{ contacts, loading, error, getContactById, fetchContacts }}>
            {children}
        </ContactsContext.Provider>
    );
};