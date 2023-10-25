import { useRef } from "react";
const CreateRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  return (
    <>
      <input disabled type="text" ref={inputRef} />
      <button onClick={handleFocus}>Enable</button>
    </>
  );
};
export default CreateRef;
