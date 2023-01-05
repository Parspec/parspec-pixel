import * as MUIIcons from '@mui/icons-material/';

interface IconProps{
  fontSize?: "large" | "medium" | "small" | undefined;
  name: "Close" | "UnfoldMore" | "Search" | "DragIndicator";
}

export const Icon: React.FC<IconProps> = ({name, fontSize}) => {
  const SelectedIcon = MUIIcons[name as keyof typeof MUIIcons]
  return (
    <SelectedIcon fontSize={fontSize} />
  )
}

Icon.defaultProps={
  fontSize: "medium",
}