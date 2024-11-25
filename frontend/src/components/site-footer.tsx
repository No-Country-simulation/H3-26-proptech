import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import Styles from "./SiteFooter.module.css";

import Logo from "../../public/logo.svg";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer__container}>
        <div className={Styles.newsletter}>
          <div className={Styles.newsletter__content}>
            <h2 className="text-xl">Suscríbete</h2>
            <p className="text-sm">
              Recibe las últimas oportunidades de inversión en terrenos,
              actualizaciones y consejos exclusivos directamente en tu correo.
            </p>
          </div>
          <div className={Styles.newsletter__actions}>
            <div className={Styles.newsletter__actions_form}>
              <Input
                placeholder="Ingresa tu correo"
                className={Styles.newsletter__actions_input}
              />
              <Button className={Styles.newsletter__actions_button}>
                Suscríbete
              </Button>
            </div>
            <p className={Styles.newsletter__actions_text}>
              Al suscribirte, aceptas nuestros [Términos y Condiciones] y la
              Política de Privacidad.
            </p>
          </div>
        </div>

        <div className={Styles.links}>
          <div className={Styles.links__logo}>
            <Image src={Logo} alt="Financia.al" className="h-24" />
          </div>
          <div className={Styles.links__company}>
            <h2 className="text-b1">Nuestra compañía</h2>
            <nav className="list-none">
              <li>
                <Link className="text-b2" href="/terms">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/privacy">
                  Nuestra Misión
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/cookies">
                  Visión y Valores
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/compliance">
                  Historia de Financia.al
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/compliance">
                  Socios y Alianzas
                </Link>
              </li>
            </nav>
          </div>
          <div className={Styles.links__company}>
            <h2 className="">Información Legal</h2>
            <nav className="list-none">
              <li>
                <Link className="text-b2" href="/terms">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/privacy">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/cookies">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/compliance">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/compliance">
                  Condiciones de Uso
                </Link>
              </li>
            </nav>
          </div>
          <div className={Styles.links__company}>
            <h2 className="">Oportunidad de Inversión</h2>
            <nav className="list-none">
              <li>
                <Link className="text-b2" href="/terms">
                  Terrenos Disponibles
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/privacy">
                  Simulador de Crédito
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/cookies">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/compliance">
                  Proceso de Inversión
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/compliance">
                  Testimonios de Inversores
                </Link>
              </li>
            </nav>
          </div>
          <div className={Styles.links__company}>
            <h2 className="">Soporte</h2>
            <nav className="list-none">
              <li className="gap-2">
                <Link className="text-b2" href="/terms">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/privacy">
                  Atención al Cliente
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/cookies">
                  Guías y Tutoriales
                </Link>
              </li>
              <li>
                <Link className="text-b2" href="/compliance">
                  Libro de Reclamaciones
                </Link>
              </li>
            </nav>
          </div>
        </div>

        <div className={Styles.credits}>
          <Separator className="bg-neutral-300" />
          <div className={Styles.credits__row}>
            <div>
              <p className="">© 2024 Financia.Al Derechos Reservados</p>
            </div>
            <div className={Styles.credits__row_links}>
              <Link className="" href="#" aria-label="Facebook">
                <FacebookIcon size={20} />
              </Link>
              <Link className="" href="#" aria-label="Instagram">
                <InstagramIcon size={20} />
              </Link>
              <Link className="" href="#" aria-label="Twitter">
                <TwitterIcon size={20} />
              </Link>
              <Link className="" href="#" aria-label="Twitter">
                <LinkedinIcon size={20} />
              </Link>
              <Link className="" href="#" aria-label="LinkedIn">
                <YoutubeIcon size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
