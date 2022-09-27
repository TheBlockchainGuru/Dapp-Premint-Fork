import {
    Box,
    Button,
    Stack,
    Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NftCard from '../../components/cards/NftCard';

const cards = [
    {image: '/images/projects/1.png', title: 'OSYC Project', entry: 125 },
    {image: '/images/projects/2.png', title: 'ApeLord Project', entry: 125 },
]
export default function Project () {
    return (
        <Box>
            <Stack 
                flexDirection="row" 
                alignItems="center" 
                justifyContent="space-between"
            >
                <Typography>These are all the project you've created on FANTOM.</Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{ bgcolor: '#BB86FC' }}
                >Create new project</Button>
            </Stack>
            <Stack flexDirection="row" alignItems="center" sx={{ pt: 4 }} gap={3}>
            {cards.map((element, key) => 
                <NftCard key={key} {...element}  />
            )}
            </Stack>
        </Box>
    );
}