import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { useEffect } from "react";
import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { ToastContainer, toast as notify } from "react-toastify";
import { getToast } from "remix-toast";
import toastStyles from 'react-toastify/ReactToastify.css?url'
import "./tailwind.css";
import "./globals.css"

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  },
  {
    rel: "stylesheet",
    href: toastStyles
  },
];

export const loader = async ({ request }: {request: Request}) => {
  try {
    const { toast, headers } = await getToast(request)
    return json({ toast }, { headers })
  } catch (err) {
    throw json({ error: 'Failed to load application data' }, { status: 500 })
  }
  
}

export function Layout({ children }: { children: React.ReactNode }) {

  const loaderData = useLoaderData<typeof loader>()
  const toast = loaderData?.toast

  useEffect(() => {
    if (toast) {
      notify(toast.message as string, {type: toast.type})
    }
  }, [toast])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#101010] min-h-screen no-scrollbar overflow-x-hidden">
        {children}
        <ToastContainer autoClose={3000} theme="colored" draggable/>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
