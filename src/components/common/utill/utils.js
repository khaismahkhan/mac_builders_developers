import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';

export const IsMobileWidth = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.between('xs', 'sm'));
}

export const IsDesktopWidth = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.between('lg', 'xl'));
}

export const IsTabletWidth = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.between('sm', 'lg'));
}

export const IsDesktopSmallWidth = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.between('md', 'xl'));
}

export const scrollToRefElement = (ref) => window.scrollTo({
    top: ref?.current?.offsetTop + 5,
    behavior: 'smooth',
});

export const scrollToTop = () => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});

export function formatDate(date) {
    date = new Date(date);
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return monthNames[monthIndex] + ` , ` + day + ' ' + year;
}

export function formatDateV2(date) {
    date = new Date(date);
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}