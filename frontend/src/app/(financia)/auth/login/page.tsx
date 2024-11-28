import { Label } from "@/components/ui/label";
import { LoginForm } from "./ui/LoginForm";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from "lucide-react";
import { jakarta, manrope } from "@/config/fonts";
import { Button } from "@/components/ui/button";



export default function LoginPage() {
  return (
    <div className="w-full flex">
      <div className="w-full h-[900px]">
        <LoginForm />
      </div>
      <div className="w-full h-full my-[47.5px]">
        <img src="../imgs/terrenos/image_login.png" alt="Imagen de portada del login" className="w-[720px] h-[800px]" />
      </div>
    </div>
  );
}