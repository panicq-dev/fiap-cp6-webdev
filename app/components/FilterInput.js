"use client";

export default function FilterInput({ value, onChange }) {
    return (
        <div style={{ marginBottom: 16 }}>
            <input
                type="search"
                placeholder="Filtrar por nome..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{ width: "100%", padding: 10, fontSize: 16 }}
            />
        </div>
    );
}