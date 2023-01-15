import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const TextAreaField = () => {
    return (
        <Box component="form" sx={{
            '& .MuiTextField-root': {m: 1, width: '100%', margin: '0px'},
        }}
             noValidate
             autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                />
            </div>
        </Box>
    )
}