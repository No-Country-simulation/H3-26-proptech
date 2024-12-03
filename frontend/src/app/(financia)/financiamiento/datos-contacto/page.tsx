'use client';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { manrope } from "@/config/fonts";

export default function DatosContactoPage() {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className={`${manrope.className} flex items-center  flex-col w-[95%] h-[368px] m-auto gap-6 my-[24px]`}>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="firstName" className="font-[300]">Nombre<span className="text-[#FB3748]">*</span></Label>
                    <div className="relative">
                        <Input type="text" id="firstName" placeholder="Ingresa tu nombre" className="pr-4 py-2 block w-full h-[48px]" />
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="lastName" className="font-[300]">Apellido<span className="text-[#FB3748]">*</span></Label>
                    <div className="relative">
                        <Input type="text" id="lastName" placeholder="Ingresa tu apellido" className="pr-4 py-2 block w-full h-[48px]" />
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email" className="font-[300]">Correo electronico<span className="text-[#FB3748]">*</span></Label>
                    <div className="relative">
                        <Input type="email" id="email" placeholder="Ej: financia@gmail.com" className="pr-4 py-2 block w-full h-[48px]" />
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email" className="font-[300]">Número de telefono<span className="text-[#FB3748]">*</span></Label>
                    <div className="relative">
                        <Input type="email" id="email" placeholder="Ingresa tu número de telefono" className="pr-4 py-2 block w-full h-[48px]" />
                    </div>
                </div>
            </form>
        </div>
    );
}