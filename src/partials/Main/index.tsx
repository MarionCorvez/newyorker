export default function Main({
  theme,
  children,
}: {
  theme: string;
  children: React.ReactNode;
}) {
  return <main className={theme}>{children}</main>;
}
