import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button, styled} from "@mui/material";
const Form = () => {
    const [formValues, setFormValues] = useState({});
    return (
        <div className="flex flex-col p-5 bg-gray-300 rounded">
            <div className="flex space-x-[1vw]">
                <FormTextField
                    required
                    name="required"
                    id="standard-required"
                    label="Prénom"
                    variant="standard"
                    className="w-[15vw]"
                />
                <FormTextField
                    required
                    name="required"
                    id="standard-required"
                    label="Nom"
                    variant="standard"
                    className="w-[15vw]"
                />
            </div>
            <spacer className="mb-1.5 mt-1.5"></spacer>
            <div className="flex space-x-[1vw]">
                <FormTextField
                    required
                    name="required"
                    id="standard-required"
                    label="E-mail"
                    variant="standard"
                    className="w-[15vw]"
                />
                <FormTextField
                    id="standard"
                    label="Téléphone"
                    variant="standard"
                    className="w-[15vw]"
                />
            </div>
            <spacer className="mb-1.5 mt-1.5"></spacer>
            <FormTextField
                id="standard-search"
                label="Adresse"
                type="search"
                variant="standard"
                className="w-[31vw]"
            />
            <spacer className="mb-1.5 mt-1.5"></spacer>
            <FormTextField
                id="standard-search"
                label="Objet"
                type="search"
                variant="standard"
                className="w-[31vw]"
            />
            <spacer className="mb-1.5 mt-1.5"></spacer>
            <FormTextField
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={6}
                variant="standard"
                className="w-[31vw]"
            />
            <spacer className="mb-1.5 mt-1.5"></spacer>
            <Button type="submit" variant="contained"
            sx={{backgroundColor:"#2B2D33", "&:hover":{backgroundColor: '#4D4F57'}}}>Envoyer</Button>
        </div>
    );
};

const FormTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#2B2D33',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#2B2D33',
    }
});

export default Form;