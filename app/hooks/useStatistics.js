"use client";

import { useMemo } from "react";
import { useContactsContext } from "../contexts/ContactsContext";

export function useStatistics(filteredItems = []) {
    const { contacts } = useContactsContext();

    return useMemo(
        () => ({
            total: contacts.length,
            filtered: contacts.length,
        }),
        [contacts, filteredItems]
    );
}