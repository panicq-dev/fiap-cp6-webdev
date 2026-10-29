import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
} from "react";
import contactsApi from "../services/contactsApi";

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
            const response = await contactsApi.get("/usuario");
            setContacts(response.data);
        } catch (err) {
            setError("Falha ao carregar contatos");
            setContacts([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        // TODO: carregar contatos ao iniciar
    }, [fetchContacts]);

    const getContactById = useCallback(
        (id) => {
            return contacts.find((c) => String(c.id) === String(id));
        },
        [contacts]
    );

    return (
        <ContactsContext.Provider value={{ contacts, loading, error }}>
            {children}
        </ContactsContext.Provider>
    );
};