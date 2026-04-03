import ilustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { useNavigate } from "react-router-dom";

import "../styles/auth.scss";
import { Button } from "../components/Button";

import { useAuth } from "../hooks/useAuth";

export function Home() {
  const navigate = useNavigate();

  const { user, signInWhithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWhithGoogle();
    }
    navigate("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustração" />
        <strong>Crie salas de Q&A ao vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="logo do app" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Imagem do ícone do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
