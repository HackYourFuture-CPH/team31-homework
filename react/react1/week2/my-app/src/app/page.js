import ToggleContent from "@/app/components/toggleContent.jsx";
import Button from "@/app/components/Button.jsx";
import Card from "@/app/components/Card.jsx";
import Layout from "@/app/components/layout.jsx";
import Counter from "@/app/components/Counter.jsx";
export default function Home() {
  return (
    <>
      <Button text="Hello There" />
      <Card
        title="Best Title EU"
        description="Best Description EU"
        imageUrl="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1094874726.png?crop=1.00xw:0.753xh;0,0.161xh&resize=1200:*"
      />
      <Layout />
      <ToggleContent />
      <Counter />
    </>
  );
}
