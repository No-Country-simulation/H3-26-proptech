'use client';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from "lucide-react";
import { jakarta, manrope } from "@/config/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const LoginForm = () => {
    return (
        <>
            <div className=" flex mt-[47.5px] items-start ml-[64px]">
                <img src="../imgs/logo/logo.png" alt="Logo Financia.ia" className="w-[88px] h-[88px]" />
            </div>
            <div className="flex flex-col w-[90%] m-auto mb-[20px] justify-center">
                <div className="text-center">
                    <h3 className={`${jakarta.className} font-bold text-h2 mb-[24px] mt-[115px]`}>¡Bienvenido!</h3>
                    <p className={`text-h7 ${jakarta.className} font-[400]`}>Nos alegra verte de nuevo</p>
                </div>
                <div className={`${manrope.className} flex items-center  flex-col w-[95%] h-[368px] m-auto gap-6 my-[24px]`}>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email" className="font-[300]">Correo*</Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 flex items-center px-4 pointer-events-none">
                                <Mail className="text-gray-400" />
                            </div>
                            <Input type="email" id="email" placeholder="Ingresa tu correo" className="pl-11 pr-4 py-2 block w-full h-[48px]" />
                        </div>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="password" className="font-[300]">Contraseña*</Label>
                            <a href="#" className="text-[#076780] hover:text-[#077871] text-b2 font-[600]">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div className="relative mb-[24px]">
                            <div className="absolute inset-y-0 flex items-center px-4 pointer-events-none">
                                <Lock className="text-gray-400" />
                            </div>
                            <Input type="password" id="password" placeholder="Ingresa tu contraseña" className="pl-11 pr-4 h-[48px] py-2 block w-full" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Button className={`bg-[#0068BE] text-b1 text-white ${manrope.className} font-[700]  h-[48px]`}>Iniciar Sesion</Button>
                            <Button className={`bg-white h-[48px] ${manrope.className} border border-gray-100 text-b1 font-[600]`}> <img src="../imgs/logo/logo_google.svg" alt="Logo de Google" /> Continuar con Google</Button>
                        </div>
                        <div className="flex my-[24px] items-center m-auto gap-2">
                            <p>No tienes cuenta?</p>
                            <span className="text-[#076780] font-[600]"><Link href={'/auth/new-account'}>Registrate ahora</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${manrope.className} text-b2 font-[500] ml-[64px]`}>
                <span>© 2024 Financia.Al</span>
            </div>
        </>
    )
}

// function SubmitButton() {
//     const { pending } = useFormStatus()

//     return (
//         <button disabled={pending} type="submit">
//             Sign Up
//         </button>
//     )
// }
