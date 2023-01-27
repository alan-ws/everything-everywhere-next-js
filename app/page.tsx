import Front from "./front";

export default function Home() {
  return (
    <>
      <div>PREVIEW SITE: {process.env.NEXT_PUBLIC_TEST}</div>
      <Front />
    </>
  );
}
