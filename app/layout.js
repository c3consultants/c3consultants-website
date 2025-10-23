import './globals.css'

export const metadata = {
  title: 'C3 Career Consultants | Expert Career Counselling by Manik Raj Singla',
  description: 'Transform your career with 23+ years of expert guidance from Manik Raj Singla. Career counselling, motivational speaking, and professional development services in Patiala, Punjab.',
  keywords: 'career counselling, career consultant, motivational speaker, C3 Career Consultants, Manik Raj Singla, Patiala',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
