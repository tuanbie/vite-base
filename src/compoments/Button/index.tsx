import React, { ReactNode } from "react";

interface BottomComponent {
  style: string;
  children: ReactNode;
}

const BottomComponent: React.FC<BottomComponent> = ({ children, style }) => {
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleSearchSubmit = () => {
  //   // Xử lý gửi dữ liệu tìm kiếm
  //   console.log("Search submitted:", searchTerm);
  // };

  return <button className={`${style}`}>{children}</button>;
};

export default BottomComponent;
