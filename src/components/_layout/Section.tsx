import { ReactNode, useId } from "react";

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: "clean" | "xs" | "sm" | "md" | "lg";
}

function Section({ id, className, style, children, size = "md" }: ISectionProps) {
  let useID = useId()

  const sizes = {
    clean: "",
    xs: "py-8",
    sm: "py-16",
    md: "py-20",
    lg: "py-24",
    xl: "py-40"
  };

  return (
    <section aria-labelledby={useID} id={id} className={`${className} ${sizes[size]} bg-white relative`} style={style}>
      {children}
    </section>
  )
}

export default Section;
