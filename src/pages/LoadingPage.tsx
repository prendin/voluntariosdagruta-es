import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Loader } from "lucide-react";

const LoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { nome?: string; genero?: string } | null;

  const nome = state?.nome || "devoto(a)";
  const genero = state?.genero || "";

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/confirmacao", { state: { nome, genero } });
    }, 4000);

    return () => clearTimeout(redirectTimer);
  }, [navigate, nome, genero]);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center gap-6">
          <Loader className="h-16 w-16 text-[#5f9ea0] animate-spin" />
          
          <h1 className="text-2xl md:text-3xl font-playfair font-semibold text-[#333333]">
            Guardando tu petición de oración...
          </h1>
          
          <p className="text-gray-600">
            Estamos preparando tu intención con mucho respeto y devoción.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;