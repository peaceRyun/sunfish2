import React from 'react';
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';

function InputError({ label, type, isSubmit, value, onChange }) {
    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    const isError = isSubmit && value === '';

    return (
        <FormControl isInvalid={isError}>
            <FormLabel>{label}</FormLabel>
            <Input type={type} value={value} onChange={handleInputChange} />
            {!isError ? (
                <FormHelperText>{label}을 입력합니다.</FormHelperText>
            ) : (
                <FormErrorMessage>{label}이 필요합니다.</FormErrorMessage>
            )}
        </FormControl>
    );
}

export default InputError;
