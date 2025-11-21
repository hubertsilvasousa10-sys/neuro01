'use client';

export default function SalesPage(props: any) {
  const recommendation = props?.searchParams?.recommendation ?? "";

  return (
    <main style={{ padding: "20px" }}>
      <h1>Sales Page</h1>
      <p>Recommendation: {recommendation}</p>
    </main>
  );
}
