import { Button, Layout } from "@fubao/components";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <span>{count}</span>
      <Button onClick={() => setCount((prev) => prev + 1)}>버튼</Button>
    </Layout>
  );
}

export default App;
