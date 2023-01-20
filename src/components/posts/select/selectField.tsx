import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import s from './SelectField.module.css'


export const SelectField = () => {
    return (
        <div className={s.wrapper}>
            <div>
                <FormControl fullWidth size="small">
                    <Select className={s.selectFilterWrapper}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={''}
                            onChange={() => {
                            }}
                    >
                        <MenuItem value={10}>New posts first</MenuItem>
                        <MenuItem value={20}>Old posts first</MenuItem>

                    </Select>
                </FormControl>
            </div>
        </div>

    )
}