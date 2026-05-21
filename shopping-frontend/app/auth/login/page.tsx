"use client";

import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import NextLink  from "next/link"


export default function Login() {
    return (
        <Stack spacing={2} className="w-full max-w-sm">
            <TextField label="Email" variant="filled" type="email" />
            <TextField label="Password" variant="filled" type="password" />
            <Button variant="contained">Login</Button>
            <Link component={NextLink} href="/auth/signup"> Don&apos;t have an account? Sign Up</Link>
        </Stack>
    )
}