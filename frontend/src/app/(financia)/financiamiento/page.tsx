'use client';
import { useState } from 'react';
import { cn } from "@/lib/utils"; // Utilidad de shadcn/ui
import { manrope } from '@/config/fonts';
import DatosContactoPage from './datos-contacto/page';
import ValidarIdentidadPage from './validar-identidad/page';
import DatosGarante1Page from './datos-garante1/page';
import DatosGarante2Page from './datos-garante2/page';

const Steps = ({ steps }: any) => {
    const [currentStep, setCurrentStep] = useState(0);

    const isLastStep = currentStep === steps.length - 1;

    const handleNext = () => {
        if (!isLastStep) setCurrentStep((prev) => prev + 1);
    };

    const handlePrevious = () => {
        if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    };

    return (
        <div className={`${manrope.className} w-full md:max-w-[796px] mx-auto my-10`}>
            
            <div>
                <div className='flex gap-2 items-center justify-center'>
                    <div>
                        <img src='../imgs/logo/logo.png' alt="Logo Financia.al" className='size-20' />
                    </div>
                    <div className={`${manrope.className} text-h5`}>
                        <p className='font-extralight'>FINANCIA. <span className='text-[#0068BE] text-h4 font-bold'>AL</span></p>
                    </div>
                </div>
                <div>
                    <p className={`${manrope.className} font-bold text-h4 text-center text-balance text-[#003B6C]`}>
                        Completa los siguientes pasos para poder solicitar financiamiento
                    </p>
                </div>
            </div>

            <div className="relative flex items-center justify-between my-10">
                {steps.map((step: any, index: number) => (
                    <div key={index} className="relative flex-1 flex items-center">
                       
                        {index > 0 && (
                            <div
                                className={`h-1 flex-1 ${index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                            />
                        )}
                        <div
                            className={cn(
                                "h-8 w-8 flex items-center justify-center rounded-full border-2 text-sm font-medium",
                                index <= currentStep
                                    ? "border-blue-600 bg-blue-100 text-blue-600"
                                    : "border-gray-300 bg-white text-gray-400"
                            )}
                        >
                            {index + 1}
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`h-1 flex-1 ${index < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="mb-8">
                <h2 className={`${manrope.className} text-h4 font-medium text-center`}>{steps[currentStep].title}</h2>
                <div>{steps[currentStep].content}</div>
            </div>

            <div className="flex gap-2 items-center justify-center">
                <button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="px-4 py-2 text-h7 text-black w-[200px] flex items-center justify-center h-[42px] border rounded-lg disabled:opacity-50 border-black"
                >
                    Volver al inicio
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 text-h7 w-[200px] h-[42px] flex items-center justify-center text-white bg-[#0068BE] rounded disabled:opacity-50"
                >
                    {isLastStep ? "Finalizar" : "Siguiente"}
                </button>
            </div>
        </div>
    );
};

const StepExamplePage = () => {
    const steps = [
        { label: "Paso 1", title: "Datos de contacto", content: <DatosContactoPage /> },
        { label: "Paso 2", title: "Validación de identidad", content: <ValidarIdentidadPage /> },
        { label: "Paso 3", title: "Datos de Garante 1", content: <DatosGarante1Page /> },
        { label: "Paso 4", title: "Datos de Garante 2", content: <DatosGarante2Page /> },
    ];

    return <Steps steps={steps} />;
};

export default StepExamplePage;
