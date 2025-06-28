import "./globals.css";

import { Container } from "@mui/material";
import Navbar from "./components/navbar/navbar.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
