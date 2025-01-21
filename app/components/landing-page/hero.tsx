import ProjectCard from "../common/project-card";
import TotalVisits from "../common/total-visits";
import UserCard from "../common/user-card";
import Button from "../ui/button";
import TextInput from "../ui/text-input";

export default function Hero() {
  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Seus projetos e redes sociais em um único Link
        </h1>

        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe ele com todos!
          <br />
          Acompanhe o engajamento com o Analytics de cliques!
          <br />
        </h2>
        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-xl">project-in-bio.com/</span>
          <TextInput placeholder="seulink.dev" />
          <Button>Criar Agora</Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
        <div className="relative">
          <UserCard />
          <div className="absolute -bottom-[7%] -right-[10%]">
            <TotalVisits />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}
