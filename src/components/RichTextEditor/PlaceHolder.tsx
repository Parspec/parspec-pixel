import { Box } from '../Box';

import './RichText.css';

export default function Placeholder() {
    return (
        <Box className="editor-placeholder" sx={{ top: '66px', left: '15px' }}>
            Enter text...
        </Box>
    );
}
