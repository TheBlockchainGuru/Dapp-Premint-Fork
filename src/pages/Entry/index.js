import React from 'react';
import {
    Box,
    Button,
    Stack,
    Tab,
    Tabs,
    Typography,
} from '@mui/material';
import FullList from './FullList';
import BulkUpdate from './BulkUpdate';
import RemoveBot from './RemoveBot';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
    >
        {value === index && (
        <Box>
            {children}
        </Box>
        )}
    </div>
    );
}

function a11yProps(index) {
    return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Entry () {
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Stack flexDirection="row" justifyContent="flex-end" gap={1.5}>
                <Button startIcon={<SettingsOutlinedIcon />} sx={{ textTransform: 'uppercase' }}>
                    Settings
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: '#BB86FC',
                        textTransform: 'uppercase'
                    }}
                >Export</Button>
            </Stack>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, pt: 4, borderColor: 'divider' }}>
                    <Stack 
                        flexDirection="row" 
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Tabs 
                            value={value} 
                            onChange={handleChange} aria-label="basic tabs example"
                            sx={{
                                '& .MuiTabs-indicator': {
                                    bgcolor: '#BB86FC'
                                },
                                '& .Mui-selected': {
                                    color: '#BB86FC !important'
                                }
                            }}
                        >
                            <Tab 
                                label={
                                    <Stack
                                        flexDirection="row"
                                        alignItems="center"
                                        gap={1}
                                    >
                                        <FormatListBulletedOutlinedIcon />
                                        <Typography>Full List</Typography>
                                    </Stack>
                                } 
                                {...a11yProps(0)} 
                            />
                            <Tab 
                                label={
                                    <Stack
                                        flexDirection="row"
                                        alignItems="center"
                                        gap={1}
                                    >
                                        <SystemUpdateAltOutlinedIcon />
                                        <Typography>Bulk Update</Typography>
                                    </Stack>
                                }
                                {...a11yProps(1)} />
                            <Tab 
                                label={
                                    <Stack
                                        flexDirection="row"
                                        alignItems="center"
                                        gap={1}
                                    >
                                        <DoDisturbOnOutlinedIcon />
                                        <Typography>Remove Bots</Typography>
                                    </Stack>
                                } 
                                {...a11yProps(2)} />
                        </Tabs>
                        <Stack flexDirection="row" alignItems="center" gap={1}>
                            <EmojiEventsOutlinedIcon />
                            <Typography sx={{ fontFamily: 'Inter-Semi-Bold' }}>Pick Winners</Typography>
                        </Stack>
                    </Stack>
                </Box>
                <TabPanel value={value} index={0}>
                    <FullList />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <BulkUpdate />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <RemoveBot />
                </TabPanel>
            </Box>
        </Box>
    )
}