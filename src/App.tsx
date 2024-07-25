import { ChangeEvent, useState } from "react";
import Input from "./components/input/Input";

function App() {
  const [nama, setNama] = useState<string>();

  const handleChangeNama = (e: ChangeEvent<HTMLInputElement>) => {
    setNama(e.target.value);
  };

  return (
    <>
      <div className="App">
        <Input onChange={handleChangeNama} />
        {
          nama=='john'? <> <h1> kamu adalah {nama}</h1> </> : <> <h1> Kamu Bukan John</h1> </>
        }
      </div>
    </>
  );
}

export default App;