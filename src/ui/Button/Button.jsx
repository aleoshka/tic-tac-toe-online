import clsx from "clsx";

/**
 * Компонент кнопки с различными вариантами стилей
 *
 * @param {Object} props - Свойства компонента
 * @param {React.ReactNode} props.children - Содержимое кнопки
 * @param {string} [props.className] - Дополнительные CSS классы
 * @param {"primary" | "outline"} [props.variant="primary"] - Вариант внешнего вида кнопки
 * @param {"lg" | "md"} [props.size="md"] - Размер кнопки
 * @returns {JSX.Element} Компонент кнопки
 */

export const Button = ({ children, className, variant, size }) => {
  const buttonClassName = clsx(
    "rounded-lg py-2 cursor-pointer transition-colors",
    className,
    {
      primary: "text-white bg-teal-600 hover:bg-teal-700",
      outline: "text-teal-600 bg-white border border-teal-600",
    }[variant],
    {
      lg: "w-[180px] text-2xl",
      md: "w-[100px] text-sm",
    }[size],
  );

  return <button className={buttonClassName}>{children}</button>;
};
