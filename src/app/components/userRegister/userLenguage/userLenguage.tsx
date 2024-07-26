'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const UserLenguage = () => {
    const countries: readonly CountryType[] = [
        { code: 'ES', label: 'Español', phone: '34', },
        { code: 'US', label: 'English', phone: '1', suggested: true },
      ];
      
      
  return (
    <div className='mt-4 mb-4 ml-4'>
        <div>
        <Autocomplete
        id="lenguage-select-demo"
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
            <Box 
                key={key}
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...optionProps}
            >
                <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
                />
                {option.label} 
            </Box>
            );
        }}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Lenguage"
            inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
            }}
            />
        )}
        />
        </div>
    </div>
  );
}

interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
