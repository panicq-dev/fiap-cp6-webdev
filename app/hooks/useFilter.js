"use client";

import { useMemo, useState } from "react";

export function useFilter(items = []) {
    const [query, setQuery] = useState("");

    const filteredItems = useMemo(() => {
        const term = query.trim().toLowerCase();
        if (!term) return items;
        return items.filter((item) =>
            String(item.username || "")
                .toLowerCase()
                .includes(term)
        );
    }, [items, query]);

    return { query, setQuery, filteredItems };
} "use client";

import { useMemo, useState } from "react";

export function useFilter(items = []) {
    const [query, setQuery] = useState("");

    const filteredItems = useMemo(() => {
        const term = query.trim().toLowerCase();
        if (!term) return items;
        return items.filter((item) =>
            String(item.username || "")
                .toLowerCase()
                .includes(term)
        );
    }, [items, query]);

    return { query, setQuery, filteredItems };
}