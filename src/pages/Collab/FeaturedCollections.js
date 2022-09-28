import {
    Box, Button, Stack, Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FeaturedCollections () {
    const router = useNavigate();
    return (
        <Box>
            <Typography>Featured Collections</Typography>
            <Box 
                sx={{ pt: 2, 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, auto)',
                    gap: 3
                }}>
                {[1,2,3,4,5,6,7,8].map((element, key) => 
                <Stack
                    key={key}
                    onClick={() =>  router('/collab/detail')}
                    sx={{
                        bgcolor: '#fff',
                        boxShadow: '0px 18.0085px 27.5424px -9.5339px #E2E8F0',
                        borderRadius: 1,
                        p: 1.5,
                        cursor: 'pointer'
                    }}
                    gap={2}
                >
                    <Box src={`/images/collabs/${element % 4 ? element % 4 : 4}.png`} component="img" sx={{ width: '100%' }} />
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Inter-Bold' }}>OSYC Project</Typography>
                    <Button fullWidth variant="contained" sx={{ bgcolor: '#BB86FC' }}>Create</Button>
                </Stack>
                )}
            </Box>
        </Box>
    );
}