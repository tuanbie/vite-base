import "./style.css";

const Dropdown: React.FC<{
  id: string;
  title: string;
  isOpen: boolean;
  onClick: (id: string) => void;
  items: React.ReactNode;
  style: string | "";
  styleTitle: string | "";
}> = ({ id, title, isOpen, onClick, items, style, styleTitle }) => {
  return (
    <div>
      <button onClick={() => onClick(id)} className={`py-4 font-normal text-sl ${styleTitle}`}>
        {title}
      </button>
      <div className={`dropdown-content ${isOpen ? "open" : ""} ${style}`}>
        <ul className="py-3 ">{items}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
