import * as s from "../products.module.css";

export default function product() {
  return (
    <>
      <Image />
      <div className={s.myBox}>
        <Header />
        <Description />
        <div>
          <BuyButton />
          <DeleteButton />
        </div>
      </div>
    </>
  );
}

function Header() {
  return <header>This is Product One</header>;
}

function Description() {
  return <p>THis is the best description of my product</p>;
}

function Image() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={s.image}
      src="https://shorturl.at/qQPIY"
      alt="Lens hovering a product"
    />
  );
}

function BuyButton() {
  return <button className={s.buyBtn}>Buy</button>;
}

function DeleteButton() {
  return <button className={s.deleteButton}>Delete</button>;
}
