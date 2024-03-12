import { Box } from '../Box';

import './RichText.css';

export default function Placeholder() {
    return (
        <Box className="editor-placeholder" sx={{ top: '72px', left: '13px' }}>
            Enter text...
        </Box>
    );
}
