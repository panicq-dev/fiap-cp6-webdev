"use client";

export default function Statistics({ total, filtered }) {
    return (
        <div
            style={{
                display: "flex",
                gap: 24,
                marginBottom: 16,
                padding: 12,
                background: "#f0f0f0",
                borderRadius: 8,
            }}
        >
            <div>
                <strong>{total}</strong>
                <div>Total</div>
            </div>
            <div>
                <strong>{filtered}</strong>
                <div>Filtrados</div>
            </div>
        </div>
    );
}