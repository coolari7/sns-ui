import React from "react";
import { Meta } from "@storybook/react";
import { OptionShape, Select as SelectComponent } from "./Select";

export default {
  component: SelectComponent,
  title: "Components/Select",
} as Meta;

interface User {
  name: string;
  age: number;
}
const options: OptionShape<User>[] = [
  { label: "Arijit", value: { name: "Arijit", age: 23 } },
  { label: "Arpit", value: { name: "Arpit", age: 24 } },
  { label: "Atharva", value: { name: "Atharva", age: 24 } },
  { label: "Abhinav", value: { name: "Abhinav", age: 23 } },
  { label: "Shubham", value: { name: "Shubham", age: 23 } },
  { label: "Pooja", value: { name: "Pooja", age: 22 } },
  { label: "Aman", value: { name: "Aman", age: 24 } },
  { label: "Anjali", value: { name: "Anjali", age: 24 } },
  { label: "Sunny", value: { name: "Sunny", age: 23 } },
  { label: "Raunak", value: { name: "Raunak", age: 23 } },
  { label: "Aimen", value: { name: "Aimen", age: 22 } },
  { label: "Melba", value: { name: "Melba", age: 24 } },
  { label: "Pranaya", value: { name: "Pranaya", age: 23 } },
  { label: "Mansi", value: { name: "Mansi", age: 23 } },
  { label: "Nisha", value: { name: "Nisha", age: 24 } },
];
export const Select = () => {
  const [value, setValue] = React.useState<OptionShape<User>>(options[0]);

  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="mt-32" style={{ height: "1000px" }}>
      <SelectComponent value={value} options={options} onChange={setValue} />
      <p>
        Block content for testing{" "}
        <span className="hover:text-red-500">positioning</span>
      </p>
    </div>
  );
};