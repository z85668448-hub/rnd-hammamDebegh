import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-cairo",
});

const metadataBase = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;
const previewImage = metadataBase
  ? [
      {
        url: "/images/rnd-logo.jpg",
        width: 768,
        height: 768,
        alt: "شعار التجمع الوطني الديمقراطي",
      },
    ]
  : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: "قائمة المترشحين | التجمع الوطني الديمقراطي - حمام دباغ",
  description:
    "تعرّف على قائمة مترشحي التجمع الوطني الديمقراطي لبلدية حمام دباغ، ولاية قالمة.",
  openGraph: {
    type: "website",
    locale: "ar_DZ",
    title: "قائمة المترشحين | التجمع الوطني الديمقراطي - حمام دباغ",
    description:
      "تعرّف على قائمة مترشحي التجمع الوطني الديمقراطي لبلدية حمام دباغ، ولاية قالمة.",
    ...(previewImage ? { images: previewImage } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "قائمة المترشحين | التجمع الوطني الديمقراطي - حمام دباغ",
    description:
      "قائمة مترشحي التجمع الوطني الديمقراطي لبلدية حمام دباغ، ولاية قالمة.",
    ...(metadataBase ? { images: ["/images/rnd-logo.jpg"] } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>{children}</body>
    </html>
  );
}
