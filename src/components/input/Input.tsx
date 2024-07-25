import { FC } from "react";
type typeInput = "text" | "number" | "password";
interface Props {
  placeholder?: string;
  value?: number | string;
  type?: typeInput;
}
const Input: FC<Props> = ({ placeholder, type, value }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} value={value} />
    </>
  );
};
Input.defaultProps = { placeholder: "Masukan Data", type: "text" };
export default Input;