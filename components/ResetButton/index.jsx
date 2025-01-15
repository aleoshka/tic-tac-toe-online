export const ResetButton = ({ onCLick }) => {
  return (
    <button
      className="cursor-pointer mt-2.5 w-24 border border-gray px-3 py-1 rounded"
      onClick={onCLick}
    >
      Сбросить
    </button>
  );
};
