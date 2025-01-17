import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  const navigate = useNavigate();

  console.log("products: ", products);
  // params를 통해서 몇번id 정보를 찾고있는지 확인
  // id를 기준으로 products에서 원하는 데이터 찾기
  const params = useParams();
  console.log("params: ", params); // {productId: "1"}
  const { productId } = useParams();
  console.log(productId);

  // id기준으로 products에서 원하는 데이터 찾기
  const [targetProduct] = products.filter((p) => p.id === Number(productId));
  console.log(targetProduct); // {id, name, body, email} or undefined
  if (!targetProduct) {
    return <main>없는 상품입니다</main>;
  }

  return (
    <main>
      <p>상품 디테일 페이지</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <ul>
        <li>판매번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세설명: {targetProduct.body}</li>
      </ul>
    </main>
  );
}
