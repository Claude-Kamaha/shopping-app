"use client";

import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import NextLink  from "next/link"
import Form from 'next/form'
import { create } from "domain";
import { createUser } from "./create-user";
import { useActionState } from "react";
import { log } from "console";

const initialState = {
  success: false,
  message: "",
};

export default function Signup() {
    const [state, FormAction, pending] = useActionState(createUser, initialState);
   console.log("State:", state);
    return (
        <Form action={FormAction} className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Stack spacing={2} className="w-full max-w-xs">
            <TextField label="Email"   name="email"
 variant="filled" type="email" />
            <TextField label="Password"   name="password"
 variant="filled" type="password" />
            <Button type="submit" variant="contained">Sign Up</Button>
            <Link component={NextLink} href="/auth/login"> Already have an account? Log In</Link>
        </Stack>
        </Form>
    )
}