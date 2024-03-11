import { Box } from '../Box';

import './RichText.css';

export default function Placeholder() {
    return (
        <Box className="editor-placeholder" position="absolute" top="12px" left="12px">
            Enter text...
        </Box>
    );
}
