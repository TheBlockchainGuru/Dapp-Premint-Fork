import {
    Box,
    Button,
    Stack,
    Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function Collab () {
    const router = useNavigate();

    return (
        <Box>
            <Stack
                flexDirection="row"
                alignItems="flex-start"
                sx={{
                    pb: 7
                }}
            >
                <Typography flex={2}>
                    Fantom helps you clean your list from possible bots and fraudulent activity. 
                    Remember, it's up to you to actually decide what you consider fraudulent. 
                    We just try to make it easy. 
                    When you clean your list, entries are marked as disqualified and will not be considered when running the raffle. 
                </Typography>
                <Stack 
                    flexDirection="row"
                    justifyContent="flex-end"
                    flex={1}>
                    <Button 
                        variant="contained"
                        size="small"
                        sx={{
                            bgcolor: '#BB86FC',
                            textTransform: 'uppercase'
                        }}
                        endIcon={<AddIcon />}
                    >Create A New</Button>
                </Stack>
            </Stack>
            <Stack flexDirection="row"
                justifyContent="space-around"
                sx={{
                    py: 4.5,
                    bgcolor: '#fff',
                    boxShadow: '0px 17px 26px -9px #E2E8F0',
                    borderRadius: 1
                }}
            >
                <Typography variant="subtitle1">Total entries:0</Typography>
                <Typography variant="subtitle1">Spots Offered:0</Typography>
                <Typography variant="subtitle1">Collabs:0</Typography>
            </Stack>
            <Stack sx={{
                pt: 8
            }}>
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
            </Stack>
        </Box>

    )
}