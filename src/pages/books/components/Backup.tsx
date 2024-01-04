import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Backup() {
  const navigate = useNavigate();
  const [restore, setRestore] = useState(false);
  const localStorageBooks = localStorage["books"];
  const bytes = new TextEncoder().encode(localStorageBooks);
  const binString = String.fromCodePoint(...bytes);
  const base = btoa(binString);

  const onChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    var files = e.target?.files;
    var f = files ? files[0] : undefined;

    if (
      f &&
      confirm("This will overwrite all data in this page. Are you sure?")
    ) {
      f.text()
        .then((text) => (localStorage["books"] = text))
        .then(() => navigate(0))
        .catch((e) => console.error(e));
    } else {
      alert("Failed to load file");
    }
  };

  return (
    <div className="backup">
      <p>
        Note: This web page relies on localStorage. To avoid data loss, make
        sure to backup all data into a file before clear history/cache data from
        this browser.
      </p>
      <a
        className="btn btn-light"
        download={"backup.json"}
        href={"data:text/javascript;charset=utf-8;base64," + base}
      >
        backup all data
      </a>
      <span>or</span>
      <button
        className="btn btn-light"
        onClick={() => setRestore((pre) => !pre)}
      >
        restore data from file
      </button>
      <br />
      {restore && <input type="file" onChange={onChange} />}
    </div>
  );
}
