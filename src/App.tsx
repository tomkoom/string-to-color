import { FC, useState } from "react";
import stc from "string-to-color";

const App: FC = (): JSX.Element => {
  const [string, setString] = useState<string>("");
  const color = stc(string);

  const clear = (): void => {
    setString("");
  };

  const paste = (): void => {
    navigator.clipboard.readText().then((s) => setString(s));
  };

  return (
    <div className="font-press-start-2p text-gray-50">
      <div className="flex items-center overflow-x-auto">
        <input
          className="w-full text-gray-950 min-w-[160px] h-[50px] px-4 text-lg font-bold outline-none caret-shape placeholder:text-gray-400"
          type="text"
          placeholder="Paste or input string"
          value={string}
          onChange={(e) => setString(e.target.value)}
        />

        <div className="flex items-center text-base font-black">
          <button
            className="h-[50px] bg-gray-950 px-8 transition-colors hover:bg-gray-800"
            onClick={clear}
          >
            Clear
          </button>

          <div className="h-[50px] w-[2px] bg-gray-800"></div>

          <button
            className="h-[50px] bg-gray-950 px-8 transition-colors hover:bg-gray-800"
            onClick={paste}
          >
            Paste
          </button>
        </div>
      </div>
      <div
        style={{ backgroundColor: color }}
        className="flex items-center justify-center h-[calc(100vh-50px)]"
      >
        <span className="text-2xl font-black">{color}</span>
      </div>
    </div>
  );
};

export default App;
