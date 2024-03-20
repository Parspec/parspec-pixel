import { Box } from '../Box';

import './RichText.css';

export function Placeholder({ placeHolderText }: { placeHolderText: string }) {
    return (
        <Box className="editor-placeholder" sx={{ top: '66px', left: '15px' }}>
            {placeHolderText}
        </Box>
    );
}
