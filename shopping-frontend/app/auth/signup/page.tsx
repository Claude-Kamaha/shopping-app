import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import NextLink  from "next/link"

"use client";

export default function Signup() {
    return (
        <Stack spacing={2} className="w-full max-w-xs">
            <TextField label="Email" variant="filled" type="email" />
            <TextField label="Password" variant="filled" type="password" />
            <Button variant="contained">Sign Up</Button>
            <Link component={NextLink} href="/auth/login"> Already have an account? Log In</Link>
        </Stack>
    )
}