import { Button, Show, ButtonGroup, Grid, GridItem } from "@chakra-ui/react";
import ColorSwitch from "./components/ColorSwitch";
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
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
