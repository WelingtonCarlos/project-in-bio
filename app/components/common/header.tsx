import { auth } from "@/app/lib/auth";
import Button from "../ui/button";
import { manageAuth } from "@/app/actions/manage-auth";

export default async function Header() {
  const session = await auth();

  console.log(session);

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="ProjectInBio Logo" />
        <h3 className="text-white text-2xl font-bold">Project In Bio</h3>
      </div>
      <div className="flex items-center gap-4">
        {session && <Button>Minha Página</Button>}
        <form action={manageAuth}>
          <Button>{session ? "Sair" : "Entrar"}</Button>
        </form>
      </div>
    </div>
  );
}
