interface IContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return <div className="px-5 mx-auto max-w-7xl">{children}</div>;
}
