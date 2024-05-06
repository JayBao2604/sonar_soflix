import { FaPen } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface EditButtonProps {
  changeState: (state: boolean) => void;
}

const EditButton = ({ changeState }: EditButtonProps) => {
  const handleClick = () => {
    changeState(true);
  };

  return (
    <Button onClick={handleClick} variant="ghost" className="transform -translate-y-3 ml-5">
      <FaPen />
    </Button>
  );
};

export default EditButton;