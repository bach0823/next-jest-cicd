export const metadata = {
  title: "App Router",
};

export default function Page() {
  return <>
  <h1>App Router</h1>
  <p>Bibi bi</p>
  <p>Welcome to Saigon</p>
  </>;
}

export function generateStaticParams() {
  return [{ slug: 'first-post' }, { slug: 'second-post' }]
}