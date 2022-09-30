import {
    Box, Stack, Typography, Button, Checkbox, OutlinedInput, TextareaAutosize, Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function Requirements () {
    const theme = useTheme();

    return (
        <Box
            sx={{
                pt: 8
            }}
        >
            <Stack gap={10}>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <LockIcon sx={{ color: '#E8A94B' }} />
                        <Typography variant='h5'>Wallet requirements</Typography>
                    </Stack>
                    <Typography>All users will be required to login but you can also set other requirements about what’s in their wallet</Typography>    
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={3}>
                            <Stack gap={1}>
                                <Typography>Required ETH balance</Typography>
                                <OutlinedInput placeholder='Required ETH Balance' size="small" />
                                <Typography variant="caption">
                                    You can require users who register to hold a minimum amount of ETH in their wallet.
                                </Typography>
                            </Stack>
                            <Stack flexDirection="row" justifyContent="flex-start" gap={1.5}>
                                <Checkbox fontSize='small' sx={{ color: '#4D82F3', alignItems: 'flex-start', p:0 }} />
                                <Stack gap={.5}>
                                    <Typography>Disqualify entries if wallet balance falls below minimum?</Typography>
                                    <Typography variant="caption">
                                        PREMINT will recheck the required wallet balance after registration. 
                                        Bots tend to move money around, so this is a great way to disqualify bots.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <LockIcon sx={{ color: '#E8A94B' }} />
                        <Typography variant='h5'>Token Ownership</Typography>
                    </Stack>
                    <Typography>You can enter two collections below, and the user will need to own an NFT from either one.</Typography>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={5}>
                            <Stack flexDirection="row" alignItems="center" justifyContent="space-between" gap={3}>
                                <Typography flex="auto">Collection 1</Typography>
                                <Stack flexDirection="row" justifyContent="space-between" flex="auto" gap={3}>
                                    <Stack gap={1}>
                                        <Typography>NFT contract address</Typography>
                                        <OutlinedInput size="small" placeholder='bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' />
                                    </Stack>
                                    <Stack gap={1}>
                                        <Typography>NFT Collection Name</Typography>
                                        <OutlinedInput size="small" placeholder='BYSC' />
                                    </Stack>
                                    <Stack gap={1}>
                                        <Typography>NFT Collection Link</Typography>
                                        <OutlinedInput size="small" placeholder='https://opensea.io/collection/bsyc' />
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack flexDirection="row" alignItems="center" justifyContent="space-between" gap={3}>
                                <Typography flex="auto">Collection 2</Typography>
                                <Stack flexDirection="row" justifyContent="space-between" flex="auto" gap={3}>
                                    <Stack gap={1}>
                                        <Typography>NFT contract address</Typography>
                                        <OutlinedInput size="small" placeholder='bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' />
                                    </Stack>
                                    <Stack gap={1}>
                                        <Typography>NFT Collection Name</Typography>
                                        <OutlinedInput size="small" placeholder='BYSC' />
                                    </Stack>
                                    <Stack gap={1}>
                                        <Typography>NFT Collection Link</Typography>
                                        <OutlinedInput size="small" placeholder='https://opensea.io/collection/bsyc' />
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack flexDirection="row" justifyContent="flex-start" gap={1.5}>
                                <Checkbox fontSize='small' sx={{ color: '#4D82F3', alignItems: 'flex-start', p:0 }} />
                                <Stack gap={.5}>
                                    <Typography>Disqualify entries if wallet balance falls below minimum?</Typography>
                                    <Typography variant="caption">
                                        PREMINT will recheck the required wallet balance after registration. 
                                        Bots tend to move money around, so this is a great way to disqualify bots.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Typography variant='h5'>Require user to own an POAP from a specific event?</Typography>    
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack flexDirection="row" justifyContent="flex-start" gap={6}>
                            <Stack gap={1.5} flex={1}>
                                <Typography>Require POAP Ownership</Typography>
                                <OutlinedInput size="small" placeholder='12566' />
                                <Typography variant='caption'> Enter event ID to require someone who registers to have a POAP from that event.</Typography>
                            </Stack>
                            <Stack gap={1.5} flex={1}>
                                <Typography>POAP Event Name</Typography>
                                <OutlinedInput size="small" placeholder='NFT Nyc party' />
                                <Typography variant='caption'> This will be displayed to the user in the form.</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <DateRangeIcon />
                        <Typography variant='h5'>Twitter verification</Typography>    
                    </Stack>
                    <Typography>Require users to sign into Twitter before registering for your list.</Typography>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack justifyContent="flex-start" gap={4.5}>
                            <Stack flexDirection="row" justifyContent="flex-start" gap={1.5}>
                                <Checkbox fontSize='small' sx={{ color: '#4D82F3', alignItems: 'flex-start', p:0 }} />
                                <Stack gap={.5}>
                                    <Typography>Twitter Verification</Typography>
                                    <Typography variant="caption">
                                        Require someone to verify themselves on Twitter before joining your list.
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack gap={1.5}>
                                <Typography>Must Follow Account(s)</Typography>
                                <OutlinedInput placeholder='@jack' size="small" />
                            </Stack>
                            <Box>
                                <Divider />
                            </Box>
                            <Stack>
                                <Typography>Re</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <LockIcon sx={{ color: '#E8A94B' }} />
                        <Typography variant='h5'>Twitter verification</Typography>
                    </Stack>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={1}>
                            <Typography>Max Entries</Typography>
                            <OutlinedInput placeholder='max entries' size="small" />
                            <Typography variant="caption">
                                Once your list hits this many, registration will close automatically
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
                <Stack flexDirection="row" justifyContent="flex-end">
                    <Button size="small" variant='contained' sx={{ bgcolor: '#BB86FC', textTransform: 'uppercase' }}>Save Settings</Button>
                </Stack>
            </Stack>
        </Box>
    );
}