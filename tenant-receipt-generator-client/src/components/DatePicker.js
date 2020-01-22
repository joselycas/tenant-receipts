import TextField from '@material-ui/core/TextField';


const DatePicker = () => {
return(
    <form className={classes.container} noValidate>
    <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
    />
</form>
    )
}

export default DatePicker