import { RegisterForm } from "./ui/RegisterForm";

export default function NewAccountPage() {
  return (
    <div className="w-full flex">
      <div className="w-full h-[900px]">
        <RegisterForm />
      </div>
      <div className="w-full h-full my-[47.5px]">
        <img src="../imgs/terrenos/image_login.png" alt="Imagen de portada del login" className="w-[720px] h-[800px]" />
      </div>
    </div>
  );
}