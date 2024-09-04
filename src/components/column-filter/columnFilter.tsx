import { ReactElement, ReactNode, useEffect, useState } from "react";
import "./columnFilter.scss";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../store/actions";
import { MdFilterList } from "react-icons/md";

export default function ColumnFilter({
  title,
  isActive,
  setActive,
}: {
  title: string;
  isActive: boolean;
  setActive: (value: string) => void;
}): ReactElement {
  const [data, setData] = useState(title);
  const dispatch = useDispatch();

  useEffect(() => {
    updateFilter(data, title, dispatch);
  }, [data]);
  return (
    <>
      {!isActive && (
        <button className="column-filter" onClick={() => setActive(title)}>
          <h3>{data}</h3>
          <MdFilterList />
        </button>
      )}
      {isActive && (
        <input
          className="column-input"
          autoFocus
          onBlur={(e) => {
            if (e.target.value === "") {
              setData(title);
            }
            setActive("");
          }}
          onChange={(e) => setData(e.target.value)}
          placeholder={`${title}...`}
        />
      )}
    </>
  );
}
