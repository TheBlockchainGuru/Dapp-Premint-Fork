import {
    Box, 
    Button,
    Stack, 
    Typography, 
    Divider,
    OutlinedInput
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function ProjectInfo () {
    const theme = useTheme();

    return (
        <Box>
            <Stack gap={11} sx={{ pt: 5 }}>
                <Stack flexDirection="row" gap={6}>
                    <Stack flex={1} gap={1}>
                        <Typography>Name</Typography>
                        <OutlinedInput
                            size="small"
                            placeholder='project name'
                        />
                    </Stack>
                    <Stack flex={1} gap={1}>
                        <Typography>Slug</Typography>
                        <OutlinedInput 
                            size='small'
                            placeholder='slug'
                        />
                    </Stack>
                </Stack>
                <Stack gap={1}>
                    <Typography>Description</Typography>
                </Stack>
                <Stack flexDirection="row" gap={6}>
                    <Stack flex={1} gap={1}>
                        <Typography>Official project website</Typography>
                        <OutlinedInput 
                            placeholder='official project website'
                            size="small"
                        />
                        <Typography variant="body2">
                            This is required, and should NOT be a Twitter or Discord web address. 
                            If you don't yet have an official link for your project, it might be too early to launch a PREMINT.
                        </Typography>
                    </Stack>
                    <Stack flex={1} gap={1}>
                        <Typography>YouTube, Vimeo, or Facebook Video Link</Typography>
                        <OutlinedInput 
                            size="small"
                            placeholder='YouTube, Vimeo, or Facebook Video Link'
                        />
                        <Typography variant="body2">
                            For YouTube: Use the full link (youtube.com/watch...) not the short link (youtu.be/...)
                        </Typography>
                    </Stack>
                </Stack>
                <Stack flexDirection="row" gap={6}>
                    <Stack flex={1} gap={1}>
                        <Typography>Image</Typography>
                        <Stack 
                            flexDirection="row"
                            alignItems="center"
                            gap={2}
                            sx={{ 
                                px: 2, 
                                py: 1, 
                                borderRadius: 1,
                                bgcolor: theme.palette.background.paper,
                                filter: 'drop-shadow(0px 1px 2px rgba(77, 64, 85, 0.1))'
                            }}
                        >
                            <Button variant="contained" size="small">Choose File</Button>
                            <Typography>No file choosen</Typography>
                        </Stack>
                        <Typography variant="body2">A square image similar to what you'd upload as your Twitter photo</Typography>
                    </Stack>
                    <Stack flex={2} gap={1}>
                        <Typography>Project Banner Image</Typography>
                        <Stack 
                            flexDirection="row"
                            alignItems="center"
                            gap={2}
                            sx={{ 
                                px: 2, 
                                py: 1, 
                                borderRadius: 1,
                                bgcolor: theme.palette.background.paper,
                                filter: 'drop-shadow(0px 1px 2px rgba(77, 64, 85, 0.1))'
                            }}
                        >
                            <Button variant="contained" size="small">Choose File</Button>
                            <Typography>No file choosen</Typography>
                        </Stack>
                        <Typography variant="body2">
                            This will go at the top of the project page. 
                            We recommend 1400x300.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack gap={2}>
                    <Typography variant="h5">Connect Social Accounts</Typography>
                    <Typography>Place one address per line. We recommend adding 100 no more than at a time.</Typography>
                    <Stack 
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            p: 5,
                            borderRadius: 1,
                            bgcolor: theme.palette.background.paper,
                            boxShadow: '0px 17px 26px -9px #E2E8F0'
                        }}
                    >
                        <Stack flexDirection="row" alignItems="center" justifyContent="space-between" flex={1} sx={{ pr: 5 }}>
                            <Stack>
                                <Typography>Twitter</Typography>
                            </Stack>
                            <Button variant="contained" color="info" sx={{ textTransform: 'uppercase' }}>Connect</Button>
                        </Stack>
                        <Divider />
                        <Stack flexDirection="row" alignItems="center" justifyContent="space-between" flex={1}>
                            <Stack>
                                <Typography>Discord</Typography>
                            </Stack>
                            <Button variant="contained" color="info" sx={{ textTransform: 'uppercase' }}>Connect</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}