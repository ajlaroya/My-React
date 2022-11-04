export default async function Head({ params }) {
  return (
    <>
      <title>{params.productHandle}</title>
    </>
  );
}
