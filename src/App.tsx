import { Button, Show, ButtonGroup, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // for mobile devices
        lg: `"nav nav" "aside main"`, // for larger devices
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="red">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="orange">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
