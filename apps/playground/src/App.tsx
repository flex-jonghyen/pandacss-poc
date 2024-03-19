import { Button, Layout } from "@fubao/components";
import { styled } from "@fubao/design-token/jsx";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledLayout>
      <span>{count}</span>
      <Button onClick={() => setCount((prev) => prev + 1)}>버튼</Button>
    </StyledLayout>
  );
}

const StyledLayout = styled(Layout, {
  base: {
    background: "gray.300",
  },
});

export default App;
