import Link from "next/link";

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
  LINK = "link",
}
interface ButtonProps {
  type: ButtonType;
  href?: string;
  children: React.ReactNode;
}
const Button = ({ type, href, children }: ButtonProps) => {
  const buttonStyles =
    "mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded";

  return (
    <>
      {type === ButtonType.LINK ? (
        <Link href={href} className={buttonStyles}>
          {children}
        </Link>
      ) : (
        <button type={type} className={buttonStyles}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
