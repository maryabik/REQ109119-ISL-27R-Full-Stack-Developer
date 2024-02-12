import * as React from "react";
import {Box, Button, IconButton} from "@mui/material";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {tokens} from "../../theme";
import {useTheme} from "@mui/material";
import AxiosFetch from "../../components/AxiosFetch";
import {useEffect, useState} from "react";
import AddClient from "../form/AddClient";
import axios from "axios";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const API_URL = 'http://localhost:3002/api/clients';
    const [clients, setClients] = useState([]);
    const {data, error, isLoading} = AxiosFetch(API_URL);

    useEffect(() => {
        setClients(data);
        console.log(data.length);
        console.log(clients);
    }, [data])

    const handleEdit = (id) => {
        // Edit logic
    };

    const handleDelete = (id) => {
        axios.delete("http://localhost:3002/api/clients/" + id)
            .then(r => console.log(r))
            .catch((e) => {
                console.log(e)
            })
        window.alert("done");
        window.location.reload(false);
    };

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5
        },
        {
            field: "year",
            headerName: "Year"
        },
        {
            field: "active",
            headerName: "Active"
        },
        {
            field: "client_id",
            headerName: "Client ID",
            cellClassName: "name-column--cell",
        },
        {
            field: "first_name",
            headerName: "First Name"},
        {
            field: "last_name",
            headerName: "Last Name"},
        {
            field: "gender",
            headerName: "Gender"},
        {
            field: "dob",
            headerName: "Date of Birth"
        },
        {
            field: "city",
            headerName: "City",
        },
        {
            field: "indigenous",
            headerName: "Indigenous",
        },
        {
            field: "pwd",
            headerName: "PWD",
        },
        {
            field: "vet",
            headerName: "Vet",
        },
        {
            field: "emergency_sheltered",
            headerName: "Emergency Sheltered",
            width: 120
        },
        {
            field: "bus_pass",
            headerName: "Bus Pass",
        },
        {
            field: "clothing_supplement",
            headerName: "Clothing Supplement",
        },
        {
            field: "pet_deposit",
            headerName: "Pet Deposit",
        },
        {
            field: "pssg",
            headerName: "PSSG",
        },
        {
            field: "status",
            headerName: "Status",
        },
        {
            field: "deceased",
            headerName: "Deceased",
        },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            filterable: false,
            width: 150,
            renderCell: (params) => (
                <strong>
                    <button onClick={() => handleEdit(params.row.id)}>Edit</button>
                    <button onClick={() => handleDelete(params.row.id)}>Delete</button>
                </strong>
            ),
        },
    ];

    return (

        <Box m="20px">
            <div>
                <Button
                    sx={{
                        color: colors.blueAccent[600], fontSize: "26px",
                        backgroundColor: colors.grey[100],
                        display: "flex",
                        alignContent: "right",
                        justifyContent: "flex-start",
                        height: "25px"

                    }}
                ><AddClient
                    count={clients.length}
                />
                </Button>
            </div>
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >

                <DataGrid
                    rows={clients}
                    columns={columns}
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    );
};

export default Contacts;
