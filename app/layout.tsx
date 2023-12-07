import '@/app/ui/global.css';
import { inter, karla } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${karla.className}`}>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
