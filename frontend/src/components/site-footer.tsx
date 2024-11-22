import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Suscríbete</h2>
            <p className="mt-4">
              Recibe las últimas oportunidades de inversión en terrenos,
              actualizaciones y consejos exclusivos directamente en tu correo.
            </p>
          </div>
          <div className="">
            <Input placeholder="Ingresa tu correo" />
            <Button className="mt-4">Suscríbete</Button>
            <p>
              Al suscribirte, aceptas nuestros [Términos y Condiciones] y la
              Política de Privacidad.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center md:flex-row gap-32">
          <div>
            <h2 className="text-lg font-semibold">Nuestra compañía</h2>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link className="hover:opacity-75" href="/terms">
                Sobre Nosotros
              </Link>
              <Link className="hover:opacity-75" href="/privacy">
                Nuestra Misión
              </Link>
              <Link className="hover:opacity-75" href="/cookies">
                Visión y Valores
              </Link>
              <Link className="hover:opacity-75" href="/compliance">
                Historia de Financia.al
              </Link>
              <Link className="hover:opacity-75" href="/compliance">
                Socios y Alianzas
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Información Legal</h2>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link className="hover:opacity-75" href="/invest">
                Términos y Condiciones
              </Link>
              <Link className="hover:opacity-75" href="/financial-reports">
                Política de Privacidad
              </Link>
              <Link className="hover:opacity-75" href="/investor-relations">
                Política de Cookies
              </Link>
              <Link className="hover:opacity-75" href="/stock-info">
                Aviso Legal
              </Link>
              <Link className="hover:opacity-75" href="/stock-info">
                Condiciones de Uso
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Support</h2>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link className="hover:opacity-75" href="/help">
                Help Center
              </Link>
              <Link className="hover:opacity-75" href="/faq">
                FAQ
              </Link>
              <Link className="hover:opacity-75" href="/customer-service">
                Customer Service
              </Link>
              <Link className="hover:opacity-75" href="/community">
                Community Forum
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Soporte</h2>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link className="hover:opacity-75" href="/invest">
                Why Invest
              </Link>
              <Link className="hover:opacity-75" href="/financial-reports">
                Financial Reports
              </Link>
              <Link className="hover:opacity-75" href="/investor-relations">
                Investor Relations
              </Link>
              <Link className="hover:opacity-75" href="/stock-info">
                Stock Information
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex space-x-4">
            <Link className="hover:opacity-75" href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link className="hover:opacity-75" href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link className="hover:opacity-75" href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link className="hover:opacity-75" href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-[200px]"
            />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          © 2024 Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
