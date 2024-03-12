import { Box } from '../Box';

import './RichText.css';

export default function Placeholder({ placeholderPositionTop, placeholderPositionBottomLeft }: { placeholderPositionTop: string; placeholderPositionBottomLeft: string }) {
    return (
        <Box className="editor-placeholder" sx={{ top: placeholderPositionTop, left: placeholderPositionBottomLeft }}>
            Enter text...
        </Box>
    );
}
