import type { Metadata } from 'next';
import './globals.css';
import './business-theme.css';
export const metadata: Metadata = { title: 'Forge | Industrial Sales Workspace', description: 'Industrial sales planning, account management, and negotiation workspace' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
