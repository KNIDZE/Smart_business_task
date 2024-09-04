import { ReactElement, useState } from "react";
import ColumnFilter from "../column-filter/columnFilter";

export default function TableFilter(): ReactElement {
  const [activeFilter, setActive] = useState("");
  const filterdata = ["Name", "Username", "Email", "Phone"];
  return (
    <thead>
      <tr>
        {filterdata.map((title) => (
          <th>
            <ColumnFilter
              isActive={activeFilter === title}
              title={title}
              setActive={setActive}
              key={title}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
}
