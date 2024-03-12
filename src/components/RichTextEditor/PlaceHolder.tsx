import { Box } from '../Box';

import './RichText.css';

export default function Placeholder() {
    return (
        <Box className="editor-placeholder" sx={{ top: '83px', left: '34px' }}>
            Enter text...
        </Box>
    );
}
