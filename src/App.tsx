// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";

function App() {
  // return <Card body={"Hola mundossas"} card={2} />;
  // return <CardBody title={"Hola mundossas"} text={"s"} />;
  return (
    <Card button={<Button></Button>}>
      <CardBody title="hola mundo" text="pendejo" />
    </Card>
  );
}
export default App;
