import { useState } from 'react';
import { 
    Box, 
    Stack, 
    Typography, 
    OutlinedInput, 
    Button, 
    Stepper,
    Step,
    Checkbox
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function Create () {
    const theme = useTheme();
    const [step, setStep] =  useState(1);
    const navigate = useNavigate();
    return (
        <Box>
            {
                step == 1
                ?
                    <Stack gap={3}>
                        <Typography variant="h5">Tell us about the project</Typography>
                        <Stack 
                            gap={5}
                            sx={{
                                bgcolor: theme.palette.background.paper,
                                border: '1px solid #F1F4F9',
                                boxShadow: '0px 17px 26px -9px #E2E8F0',
                                borderRadius: 1,
                                p: 4
                            }}
                        >
                            <Stack gap={1.5}>
                                <Typography>Name of Project / Collection</Typography>
                                <OutlinedInput 
                                    size="small"
                                    sx={{
                                        bgcolor: '#fff'
                                    }}
                                    placeholder="Name of Project / Collection"
                                />
                            </Stack>
                            <Stack gap={1.5}>
                                <Typography>Official Project Website</Typography>
                                <OutlinedInput 
                                    size="small"
                                    sx={{
                                        bgcolor: '#fff'
                                    }}
                                    placeholder="Official Project Website"
                                />
                                <Typography variant="body2">
                                    This is required. and should Not be a Twitter or Discord web address
                                    If you don't yet have an official link for your project, it might be too early to launch a PREMINT
                                </Typography>
                            </Stack>
                            <Stack gap={1.5}>
                                <Typography>Image</Typography>
                                
                                <Typography variant="body2">
                                    A square image similar to what you'd upload as your Twitter photo
                                </Typography>
                            </Stack>
                            <Stack gap={1.5}>
                                <Typography>Mint price</Typography>
                                <OutlinedInput 
                                    size="small"
                                    placeholder="Mint price"
                                />
                            </Stack>
                            <Stack gap={1.5}>
                                <Typography>Image</Typography>
                                <OutlinedInput 
                                    size="small"
                                    placeholder="Mint date"
                                />
                                <Typography variant="body2">
                                    RECOMMENDED. This helps the person who is registering remember to mint
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack flexDirection="row" justifyContent="flex-end">
                            <Button variant="contained" 
                                onClick={() => setStep(2)}
                                sx={{
                                    bgcolor: '#BB86FC',
                                    textTransform: 'uppercase'
                                }}
                            >Next</Button>
                        </Stack>
                    </Stack>
                : step == 2 
                ? 
                    <Stack gap={3}>
                        <Typography variant="h5">How big is the collection and how many people will get spots?</Typography>
                        <Stack 
                            gap={5}
                            sx={{
                                bgcolor: theme.palette.background.paper,
                                border: '1px solid #F1F4F9',
                                boxShadow: '0px 17px 26px -9px #E2E8F0',
                                borderRadius: 1,
                                p: 4
                            }}
                        >
                            <Stack gap={1.5}>
                                <Typography>What is the total token supply for this collection?</Typography>
                                <OutlinedInput 
                                    size="small"
                                    sx={{
                                        bgcolor: '#fff'
                                    }}
                                    placeholder="What is the total token supply for this collection?"
                                />
                                <Typography variant='body2'>
                                    If you plan to have 10,000 NFTs minted, this would be 10,000.
                                </Typography>
                            </Stack>
                            <Stack gap={1.5}>
                                <Typography>How many spots are you giving away via this PREMINT list?</Typography>
                                <OutlinedInput 
                                    size="small"
                                    sx={{
                                        bgcolor: '#fff'
                                    }}
                                    placeholder="How many spots are you giving away via this PREMINT list?"
                                />
                                <Typography variant="body2">
                                    This is the number of guarnateed spots that will be granted to participants of this list.
                                </Typography>
                            </Stack>
                        </Stack>
                        
                        <Stack flexDirection="row" justifyContent="flex-end">
                            <Button variant="contained"
                                onClick={() => setStep(3)}
                                sx={{
                                    bgcolor: '#BB86FC',
                                    textTransform: 'uppercase'
                                }}
                            >Next</Button>
                        </Stack>
                    </Stack>
                : step == 3
                ?
                    <Stack gap={3}>
                        <Typography variant="h5">Will you be overallocating?</Typography>
                        <Typography>
                            Collectors who win PREMINT expect a guarnateed spot, so you need to tell them if that's not the case.
                            If you overallocate without being clear, you will be flagged on PREMINT.
                        </Typography>
                        <Stack 
                            gap={5}
                            sx={{
                                bgcolor: theme.palette.background.paper,
                                border: '1px solid #F1F4F9',
                                boxShadow: '0px 17px 26px -9px #E2E8F0',
                                borderRadius: 1,
                                p: 4
                            }}
                        >
                            <Stack flexDirection="row" justifyContent="flex-start" gap={1.5}>
                                <Checkbox fontSize='small' sx={{ color: '#4D82F3', alignItems: 'flex-start', p:0 }} />
                                <Stack gap={.5}>
                                    <Typography>This project's mint will be overallocated.</Typography>
                                    <Typography variant="caption">
                                        This means that your allowlist will have more people on it than there are NFTs.
                                        so minting will be first come first serve.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack flexDirection="row" justifyContent="flex-end">
                            <Button variant="contained" 
                                onClick={() => setStep(4)}
                                sx={{
                                    bgcolor: '#BB86FC',
                                    textTransform: 'uppercase'
                                }}
                            >Next</Button>
                        </Stack>
                    </Stack>
                : step == 4
                ?
                <Stack gap={3}>
                    <Typography variant="h5">When do you want your PREMINT list opne/closed?</Typography>
                    <Stack 
                        gap={5}
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={1.5}>
                            <Typography>Registration start date</Typography>
                            <OutlinedInput 
                                size="small"
                                sx={{
                                    bgcolor: '#fff'
                                }}
                                placeholder="10/06/2022 02:14"
                            />
                            <Typography variant='body2'>
                                When should people be able to join your list?
                            </Typography>
                        </Stack>
                        <Stack gap={1.5}>
                            <Typography>Registration end date</Typography>
                            <OutlinedInput 
                                size="small"
                                sx={{
                                    bgcolor: '#fff'
                                }}
                                placeholder="Registration end date"
                            />
                            <Typography variant="body2">
                                When should registration close for your list?
                            </Typography>
                        </Stack>
                        <Stack gap={1.5}>
                            <Typography>Close registration once it hits this many entries:</Typography>
                            <OutlinedInput 
                                size="small"
                                sx={{
                                    bgcolor: '#fff'
                                }}
                                placeholder="Registration end date"
                            />
                            <Typography variant="body2">
                                Leave this blank for unlimited
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack flexDirection="row" justifyContent="flex-end">
                        <Button variant="contained" 
                            onClick={() => setStep(5)}
                            sx={{
                                bgcolor: '#BB86FC',
                                textTransform: 'uppercase'
                            }}
                        >Next</Button>
                    </Stack>
                </Stack>
                : step == 5
                ?
                    <Stack gap={3}>
                        <Typography variant="h5">When do you plan to run the raffle?</Typography>
                        <Typography>
                            Collectors like to know when they should find out if they've got a spot.
                            We encourage you to enter a date, but this is optional.
                        </Typography>
                        <Stack 
                            gap={5}
                            sx={{
                                bgcolor: theme.palette.background.paper,
                                border: '1px solid #F1F4F9',
                                boxShadow: '0px 17px 26px -9px #E2E8F0',
                                borderRadius: 1,
                                p: 4
                            }}
                        >
                            <Stack gap={1.5}>
                                <Typography>Planned Raffle Time</Typography>
                                <OutlinedInput 
                                    size="small"
                                    sx={{
                                        bgcolor: '#fff'
                                    }}
                                    placeholder="Planned Raffle Time"
                                />
                                <Typography variant='body2'>
                                    This doesn't happen automatically, but if you intend to pick winners from this list.
                                    When will they be selected?
                                    Most collectors really appreciate knowing when they'll find out if they won or not.
                                </Typography>
                            </Stack>
                        </Stack>
                        
                        <Stack flexDirection="row" justifyContent="flex-end">
                            <Button variant="contained" 
                                onClick={() => setStep(6)}
                                sx={{
                                    bgcolor: '#BB86FC',
                                    textTransform: 'uppercase'
                                }}
                            >Next</Button>
                        </Stack>
                    </Stack>
                : step == 6
                ?
                    <Stack gap={3}>
                        <Typography variant="h5">Confirm Project Details</Typography>
                        <Stack 
                            gap={5}
                            sx={{
                                bgcolor: theme.palette.background.paper,
                                border: '1px solid #F1F4F9',
                                boxShadow: '0px 17px 26px -9px #E2E8F0',
                                borderRadius: 1,
                                p: 4
                            }}
                        >
                            <Stack gap={1.5}>
                                <OutlinedInput 
                                    size="small"
                                    sx={{
                                        bgcolor: '#fff'
                                    }}
                                    placeholder="Planned Raffle Time"
                                />
                                <Typography variant='body2'>
                                    It's very important to confirm accuracy of this information so we can properly se expectations with collectors
                                </Typography>
                            </Stack>
                        </Stack>
                        
                        <Stack flexDirection="row" justifyContent="flex-end">
                            <Button variant="contained" 
                                onClick={() => navigate('/project')}
                                sx={{
                                    bgcolor: '#BB86FC',
                                    textTransform: 'uppercase'
                                }}
                            >Confirm</Button>
                        </Stack>
                    </Stack>
                : <></>
            }
            
            
        </Box>
    );
}