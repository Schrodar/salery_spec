import Layoute from "../components/Layoute";

export default function Home() {
  return (
    <Layoute>
      <div className="flex-1"></div>
      <div className="flex h-screen w-auto flex-1 items-center justify-end justify-center bg-[url('../public/images/home.png')] bg-cover bg-no-repeat"></div>
    </Layoute>
  );
}
