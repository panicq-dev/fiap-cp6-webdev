"use client";

import { useMemo, useState } from "react";
import { useContactsContext } from "../contexts/ContactsContext";


export function useFilter(items = []) {
    const [query, setQuery] = useState("");

    const filteredContacts = useMemo(() => {
        const term = query.trim().toLowerCase();
        if (!term) return items;
        return items.filter((item) =>
            String(item.name || "")
                .toLowerCase()
                .includes(term)
        );
    }, [items, query]);

    return { query, setQuery, filteredContacts };
}