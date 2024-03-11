interface TitleProps {
  children: React.ReactNode;
}
const Title = ({ children }: TitleProps) => {
  return <h1 className="font-bold text-4xl">{children}</h1>;
};

export default Title;
