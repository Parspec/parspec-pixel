import { CloseIcon } from "./Close";
import { SearchIcon } from "./Search";
import { UnfoldMoreIcon } from "./UnfoldMore";
import { DragIndicatorIcon } from "./DragIndicator";
import { Box } from "../Box";
import { Grid } from "../Grid";

export interface IconsType{
  fontSize?: "large" | "medium" | "small" | undefined;
}

export const icons = [
  {icon: CloseIcon, name: "CloseIcon"},
  {icon: SearchIcon, name: "SearchIcon"},
  {icon: UnfoldMoreIcon, name: "UnfoldMoreIcon"},
  {icon: DragIndicatorIcon, name: "DragIndicatorIcon"},
]

export const AllIcons: React.FC<IconsType> = (props) => {
  return(
    <Grid container>
      {
      icons.map((Element)=>
        <Grid item xs={4} sm={3} md={2} gap={5}>
          <>
          <Element.icon {...props}/>
          <Box>{`${Element.name}`}</Box>
          </>
        </Grid>
      )
      }
    </Grid>
  );
}

export * as Icons from ".";
