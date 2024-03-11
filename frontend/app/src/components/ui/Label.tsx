interface LabelProps {
  name: string;
  children: React.ReactNode;
}
const Label = ({ name, children }: LabelProps) => {
  return (
    <label htmlFor={name} className="font-medium block mb-1">
      {children}
    </label>
  );
};

export default Label;
