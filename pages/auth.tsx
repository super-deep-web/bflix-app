import React, { useCallback, useState, useRef, useEffect } from "react";
import Image from "next/image";
import Input from "@/components/input";
import { useRouter } from "next/router";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const errorRef = useRef(null);
  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validCredentials =
      email === "beaxperez@stitch.com" && password === "190723";

    if (validCredentials) {
      setIsLoading(true);
      // Simulate loading time
      setTimeout(() => {
        setIsLoading(false);
        router.push("/selection");
      }, 1000);
    } else {
      setErrorMessage("Correo o contraseña incorrecto");
    }
  };

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.webp')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full"
          >
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Iniciar sesión" : "Registrarse"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Nombre"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  id="name"
                  type="text"
                  value={name}
                />
              )}
              <Input
                label="Correo"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Contraseña"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                id="password"
                type="password"
                value={password}
              />
              <span
                ref={errorRef}
                className={`text-red-500 font-medium ${
                  errorMessage ? "block" : "hidden"
                }`}
              >
                {errorMessage}
              </span>
              <button
                type="submit"
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
                disabled={isLoading}
              >
                {isLoading
                  ? "Cargando..."
                  : variant === "login"
                  ? "Acceder"
                  : "Crear cuenta"}
              </button>
              <p className="text-neutral-500 mt-12">
                {variant === "login"
                  ? "¿Primera vez aquí?"
                  : "¿Ya tienes cuenta?"}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {variant === "login" ? "Crea una cuenta" : "Iniciar sesión"}
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
};

export default Auth;
