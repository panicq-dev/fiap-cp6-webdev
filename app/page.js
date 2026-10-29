"use client";

import { useContactsContext } from "../contexts/ContactsContext";
import { useFilter } from "../hooks/useFilter";
import { useStatistics } from "../hooks/useStatistics";
import FilterInput from "./components/FilterInput";
import Statistics from "./components/Statistics";
import ContactList from "./components/ContactList";

export default function HomePage() {
  const { contacts, loading, error } = useContactsContext();
  const { query, setQuery, filteredContacts } = useFilter(contacts);
  const stats = useStatistics(filteredContacts);

  if (loading) return <p>Carregando contatos...</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;

  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
      <h1>Contatos</h1>
      <FilterInput value={query} onChange={setQuery} />
      <Statistics total={stats.total} filtered={stats.filtered} />
      <ContactList contacts={filteredContacts} />
    </main>
  );
}