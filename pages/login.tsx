import Layoute from "../components/Layoute";
import { useState, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eOn, setEOn] = useState(false);
  const [pOn, setPOn] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const seIF = () => {
    if (email === "") setEOn(false);
    else setEOn(true);
    return;
  };

  const seIf = () => {
    if (password === "") setPOn(false);
    else setPOn(true);
    console.log(password);
    return;
  };
  return (
    <Layoute title="User login">
      <div className="relative flex flex-1 items-center justify-center">
        <div className="absolute top-1/3 left-1/2 flex h-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 flex-col rounded border-2">
          <div className="mb-5 flex items-center justify-center">
            <h1 className="mt-2 font-sans text-4xl font-bold">Login</h1>
          </div>
          <div className="h-full w-full">
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col items-center justify-evenly"
            >
              <div className="relative h-full w-full font-sans">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <input
                    className="relavitve border-1 rounded border-2 border-gray-300"
                    type="email"
                    onChange={(e) =>
                      setEmail((e.target as HTMLInputElement).value)
                    }
                    onFocus={() => setEOn(true)}
                    onBlur={() => seIF()}
                  />

                  <label
                    className={` pointer-events-none absolute left-0 ${
                      eOn ? "opacity-0" : ""
                    } transition-all duration-500`}
                    htmlFor="email"
                    id="email"
                    defaultValue={"Email"}
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="relative h-full w-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans">
                  <input
                    className="relavitve rounded border-2 border-gray-400"
                    type="password"
                    onChange={(e) =>
                      setPassword((e.target as HTMLInputElement).value)
                    }
                    onFocus={() => setPOn(true)}
                    onBlur={() => seIf()}
                  />

                  <label
                    className={` pointer-events-none absolute left-0 ${
                      pOn ? "opacity-0" : ""
                    } transition-all duration-500`}
                    htmlFor="pwd"
                    id="pwd"
                    defaultValue={"Pwd"}
                  >
                    Password
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-auto flex-1 items-center justify-end justify-center bg-slate-200 bg-[url('../public/images/document.png')] bg-cover bg-no-repeat"></div>
    </Layoute>
  );
}
