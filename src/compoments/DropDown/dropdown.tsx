import "./style.scss";

const Dropdown: React.FC<{
  id: string;
  title: string;
  isOpen: boolean;
  onClick: (id: string) => void;
  items: React.ReactNode;
}> = ({ id, title, isOpen, onClick, items }) => {
  return (
    <div>
      <button onClick={() => onClick(id)} className="py-4 font-normal text-sl">
        {title}
      </button>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        <ul className="py-3 text-xs font-medium">{items}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
