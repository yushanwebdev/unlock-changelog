export default function Layout(props: {
  children: React.ReactNode;
  info: React.ReactNode;
  list: React.ReactNode;
}) {
  return (
    <main>
      {props.children}
      {props.info}
      {props.list}
    </main>
  );
}
