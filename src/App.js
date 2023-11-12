import fotoku from "./assets/Foto.png";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container flex justify-center gap-96 items-center bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col gap-2">
          <TypeAnimation
            sequence={[
              "Ramadhan Rizqi Saputra",
              1000,
              "Software Engineer.",
              1000,
            ]}
            speed={25}
            style={{ fontSize: "26px" }}
            repeat={2}
          />
          <p>Freelance Web Developer</p>
          <p>Institut Teknologi Telkom Purwokerto</p>
        </div>
        <img
          src={fotoku}
          alt="img"
          width={350}
          height={400}
          className="rounded-2xl p-2"
        />
      </div>
    </div>
  );
}

export default App;
