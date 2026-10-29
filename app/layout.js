import "./globals.css";
import { ContactsProvider } from "../contexts/ContactsContext";

export const metadata = {
  title: "Checkpoint 6 – Contatos",
  description: "useContext e hooks customizados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}