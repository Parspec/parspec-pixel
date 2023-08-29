import { Box } from "../Box";
import { IconButton } from "../IconButton";
import { CloseIcon } from "../Icons";
import { BodySmall } from "../Typography";

interface SelectedItemsCountProps {
    count: number, 
    closeBanner: () => void
}
export const SelectedItemsCount =(props: SelectedItemsCountProps) => {
    const { count, closeBanner } = props;
    return (
         <Box p={1} pl={3} pr={2} bgcolor={'primary.main'} color={'secondary.contrastText'} display="flex" alignItems="center" gap={2}>
            <BodySmall color="secondary.contrastText" limit={false}>
                {count} item(s) selected
            </BodySmall>
            <IconButton onClick={closeBanner} sx={{ color: 'secondary.contrastText', margin: 0, padding: 0 }}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </Box>
    )
}