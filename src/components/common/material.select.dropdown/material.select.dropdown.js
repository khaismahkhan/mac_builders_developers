import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './material.select.dropdown.scss';
import { Badge, Typography } from '@mui/material';
import { useStyle } from './material.select.dropdown.style';
import clsx from 'clsx';

const MaterialSelectDropdown = (props) => {
    const { data, value, onChange, topAdornment, error, message, showSteric, image, isOpenDropdown, showPadding, showValue } = props
    const classes = useStyle()
    return (
        <div id='material-select-dropdown' className='w-100'>
            <div className="d-flex w-100 justify-content-between label">
                {topAdornment ? (
                    <Badge badgeContent={showSteric ? <Typography variant='h6' className='d-flex align-items-center text-danger pt-1 pl-2'>*</Typography> : 0} >
                        <Typography color='primary' variant="body2" className="max-width-content">
                            <label htmlFor="text-field">
                                {topAdornment}
                            </label>
                        </Typography>
                    </Badge>
                ) : (
                    ""
                )}
                {error ? <Typography variant="caption" className="text-danger text-right">{error}</Typography> : null}
            </div>
            <FormControl className='w-100 position-relative'>
                {/* {image ?
                    <div className='h-100 position-absolute z-index d-flex align-items-center'>
                        <img
                            width='30px'
                            src={image}
                        />
                    </div> : null} */}
                <Select
                    className={clsx('select-style w-100')}
                    value={value}
                    onChange={onChange}
                    // displayEmpty
                    open={isOpenDropdown}
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                        visibility: showPadding && 'hidden',
                        Paper: {
                            className: 'w-100 bg-info',
                        }
                    }}
                >
                    {data && data.map((data, i) => {
                        return <MenuItem className={clsx(showPadding && 'pt-3 pb-3 w-100 h-100', 'menu-item-style d-flex align-items-center')} key={data.value} value={data.value}>
                            <img width='20px' height='25px' src={data.imageSrc} />
                            <Typography className='pl-2' variant='body2'> {showValue ? data.value : data.name}</Typography>
                        </MenuItem>
                    })
                    }
                </Select>
            </FormControl>
            {message ? <Typography variant="caption" className="text-muted text-left">{message}</Typography> : null}
        </div >
    )
}

export default MaterialSelectDropdown