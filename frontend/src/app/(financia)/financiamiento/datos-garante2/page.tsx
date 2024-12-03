'use client';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { manrope } from "@/config/fonts";

export default function DatosGarante2Page() {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className={`${manrope.className} flex items-center  flex-col w-[95%] h-[468px] m-auto gap-6 my-[24px]`}>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="photoFrenteGarante2DNI" className="font-[300]">Foto frente DNI<span className="text-[#FB3748]">*</span></Label>
                    <div className="relative flex items-center justify-center">
                        <Input type="file" id="photoFrenteGarante2DNI" className="pr-4 py-3 block w-full h-[48px]" />
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="photoDorsoGarante2DNI" className="font-[300]">Foto dorso DNI<span className="text-[#FB3748]">*</span></Label>
                    <div className="relative flex items-center justify-center">
                        <Input type="file" id="photoDorsoGarante2DNI" className="pr-4 py-3 block w-full h-[48px]" />
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="photoSelfieGarante2" className="font-[300]">Foto selfie<span className="text-[#FB3748]">*</span></Label>
                    <div className="relative flex items-center justify-center">
                        <Input type="file" id="photoSelfieGarante2" className="pr-4 py-3 block w-full h-[48px]" />
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="photoReciboGarante2" className="font-[300]">Cargar foto ultimos 3 recibos de sueldo<span className="text-[#FB3748]">*</span></Label>
                    <div className="relative flex items-center justify-center">
                        <Input type="file" id="photoReciboGarante2" className="pr-4 py-3 block w-full h-[48px]" />
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="photoImpuestoGarante2" className="font-[300]">Foto de impuesto<span className="text-[#FB3748]">*</span></Label>
                    <div className="relative flex items-center justify-center">
                        <Input type="file" id="photoImpuestoGarante2" className="pr-4 py-3 block w-full h-[48px]" />
                    </div>
                </div>
            </form>
        </div>
    );
}