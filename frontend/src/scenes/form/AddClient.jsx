import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Header from "../../components/Header";
import { Formik} from "formik";
import {Box, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CheckboxWithLabel } from 'formik-mui';
import {Label} from "@mui/icons-material";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const currentYear = new Date().getFullYear();

const checkoutSchema = yup.object().shape({
    id: yup.number(),

    year: yup.number()
        .min(1900, 'Year must be after 1900')
        .max(currentYear, `Year cannot be in the future`)
        .required('Year is required')
        .integer('Year must be an integer')
        .typeError('Year must be a number'),
    active: yup.string().required("required"),
    client_id: yup.number().required("required"),
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    gender: yup.string().required("required"),
    dob: yup.date()
        .max(new Date(), "Date of birth cannot be in the future.")
        .required("Date of birth is required."),
    city: yup.string().required("required"),
    indigenous: yup.string().required(),
    pwd: yup.string().required(),
    vet: yup.string().required(),
    emergency_sheltered: yup.string().required(),
    bus_pass: yup.string().required(),
    clothing_supplement: yup.string().required(),
    pet_deposit: yup.string().required(),
    pssg: yup.string().required(),
    status: yup.string(),
    deceased: yup.date()
        .max(new Date(), "Decreased cannot be in the future."),
});
const initialValues = {
    id: "",
    year: "",
    active: "",
    client_id: "",
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    city: "",
    indigenous: "",
    pwd: "",
    vet: "",
    emergency_sheltered: "",
    bus_pass: "",
    clothing_supplement: "",
    pet_deposit: "",
    pssg: "",
    status: "",
    deceased: ""
};

const AddClientDialog = ({count}) =>  {
    const [open, setOpen] = React.useState(false);

    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
        const updatedValues = { ...values, id: count + 1 };
        console.log(updatedValues);

        axios.post("http://localhost:3002/api/clients", updatedValues, {

                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then(response => console.log(response))

    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add New Client
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Add New Client
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box m="20px">
                    <Header title="Add New Client" subtitle="Create a New Client Profile" />

                    <Formik
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                        validationSchema={checkoutSchema}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleBlur,
                              handleChange,
                              handleSubmit,
                          }) => (
                            <form id ="addClient " onSubmit={handleSubmit}>
                                <Box
                                    display="grid"
                                    gap="30px"
                                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                    sx={{
                                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="number"
                                        label="ID"
                                        onBlur={handleBlur}
                                        value={values.id}
                                        disabled
                                        name="id"
                                        error={!!touched.id && !!errors.id}
                                        helperText={touched.id && errors.id}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="number"
                                        label="Year"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.year}
                                        name="year"
                                        error={!!touched.year && !!errors.year}
                                        helperText={touched.year && errors.year}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <Select
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Active"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.active}
                                        name="active"
                                        error={!!touched.active && !!errors.active}
                                        helperText={touched.active && errors.active}
                                        sx={{ gridColumn: "span 2" }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Active</InputLabel>
                                        <MenuItem value="Y">Yes</MenuItem>
                                        <MenuItem value="N">No</MenuItem>
                                    </Select>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="number"
                                        label="Client ID"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.client_id}
                                        name="client_id"
                                        error={!!touched.client_id && !!errors.client_id}
                                        helperText={touched.client_id && errors.client_id}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="First Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        name="firstName"
                                        error={!!touched.firstName && !!errors.firstName}
                                        helperText={touched.firstName && errors.firstName}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Last Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        name="lastName"
                                        error={!!touched.lastName && !!errors.lastName}
                                        helperText={touched.lastName && errors.lastName}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <Select
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Gender"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.gender}
                                        name="gender"
                                        error={!!touched.gender && !!errors.gender}
                                        helperText={touched.gender && errors.gender}
                                        sx={{ gridColumn: "span 2" }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                        <MenuItem value="female">Female</MenuItem>
                                        <MenuItem value="male">Male</MenuItem>
                                        <MenuItem value="intersex">Intersex</MenuItem>
                                        <MenuItem value="unknown">Unknown</MenuItem>
                                    </Select>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="date"
                                        label="Date Of birth"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.dob}
                                        name="dob"
                                        error={!!touched.dob && !!errors.dob}
                                        helperText={touched.dob && errors.dob}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="City"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.city}
                                        name="city"
                                        error={!!touched.city && !!errors.city}
                                        helperText={touched.city && errors.city}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <Select
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Indigenous"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.indigenous}
                                        name="indigenous"
                                        error={!!touched.indigenous && !!errors.indigenous}
                                        helperText={touched.indigenous && errors.indigenous}
                                        sx={{ gridColumn: "span 2" }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Indigenous</InputLabel>
                                        <MenuItem value="Y">Yes</MenuItem>
                                        <MenuItem value="N">No</MenuItem>
                                    </Select>

                                    <Select
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="PWD"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.pwd}
                                        name="pwd"
                                        error={!!touched.pwd && !!errors.pwd}
                                        helperText={touched.pwd && errors.pwd}
                                        sx={{ gridColumn: "span 2" }}
                                    >
                                        <InputLabel id="demo-simple-select-label">PWD</InputLabel>
                                        <MenuItem value="Y">Yes</MenuItem>
                                        <MenuItem value="N">No</MenuItem>
                                    </Select>
                                    <Select
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Vet"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.vet}
                                        name="vet"
                                        error={!!touched.vet && !!errors.vet}
                                        helperText={touched.vet && errors.vet}
                                        sx={{ gridColumn: "span 2" }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Vet</InputLabel>
                                        <MenuItem value="Y">Yes</MenuItem>
                                        <MenuItem value="N">No</MenuItem>
                                    </Select>
                                    <Select
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Emergency Sheltered"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.emergency_sheltered}
                                        name="emergency_sheltered"
                                        error={!!touched.emergency_sheltered && !!errors.emergency_sheltered}
                                        helperText={touched.emergency_sheltered && errors.emergency_sheltered}
                                        sx={{ gridColumn: "span 2" }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Emergency Sheltered</InputLabel>
                                        <MenuItem value="Y">Yes</MenuItem>
                                        <MenuItem value="N">No</MenuItem>
                                    </Select>
                                    <Select
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Bus Pass"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.bus_pass}
                                        name="bus_pass"
                                        error={!!touched.bus_pass && !!errors.bus_pass}
                                        helperText={touched.bus_pass && errors.bus_pass}
                                        sx={{ gridColumn: "span 2" }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Bus Pass</InputLabel>
                                        <MenuItem value="Y">Yes</MenuItem>
                                        <MenuItem value="N">No</MenuItem>
                                    </Select>
                                    <Select
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Clothing Supplement"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.clothing_supplement}
                                        name="clothing_supplement"
                                        error={!!touched.clothing_supplement && !!errors.clothing_supplement}
                                        helperText={touched.clothing_supplement && errors.clothing_supplement}
                                        sx={{ gridColumn: "span 2" }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Clothing Supplement</InputLabel>
                                        <MenuItem value="Y">Yes</MenuItem>
                                        <MenuItem value="N">No</MenuItem>
                                    </Select>
                                    <Select
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Pet Deposit"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.pet_deposit}
                                        name="pet_deposit"
                                        error={!!touched.pet_deposit && !!errors.pet_deposit}
                                        helperText={touched.pet_deposit && errors.pet_deposit}
                                        sx={{ gridColumn: "span 2" }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Pet Deposit</InputLabel>
                                        <MenuItem value="Y">Yes</MenuItem>
                                        <MenuItem value="N">No</MenuItem>
                                    </Select>

                                    <Select
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.pssg}
                                        name="pssg"
                                        error={!!touched.pssg && !!errors.pssg}
                                        helperText={touched.pssg && errors.pssg}
                                        sx={{ gridColumn: "span 2" }}
                                    >
                                        <InputLabel id="demo-simple-select-label">PSSG</InputLabel>
                                        <MenuItem value="Y">Yes</MenuItem>
                                        <MenuItem value="N">No</MenuItem>
                                    </Select>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Status"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.status}
                                        name="status"
                                        error={!!touched.status && !!errors.status}
                                        helperText={touched.status && errors.status}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="date"
                                        label="Deceased"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.deceased}
                                        name="deceased"
                                        error={!!touched.deceased && !!errors.deceased}
                                        helperText={touched.deceased && errors.deceased}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                </Box>
                                <Box display="flex" justifyContent="end" mt="20px">
                                    <Button type="submit" color="secondary" variant="contained">
                                        Create New User
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Dialog>
        </React.Fragment>
    );
}

export default AddClientDialog;
