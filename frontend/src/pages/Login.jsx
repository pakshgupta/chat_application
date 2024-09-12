import React, { lazy, useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents.jsx";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [error,setError]=useState({
  //   name:'',
  //   email:'',
  //   password:'',
  // })
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);
  // const isEmail = (emailValidate) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValidate);
  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };
  const handleLoginSubmit=(e)=>{
    e.preventDefault();
  }
  const handleRegisterSubmit=(e)=>{
    e.preventDefault();
  }

  console.log(avatar);
  console.log(name);
  console.log(email);
  console.log(password);
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onSubmit={handleLoginSubmit}
            >
              <TextField
                type="email"
                required
                fullWidth
                label="email"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                type="password"
                required
                fullWidth
                label="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="mormal"
                variant="outlined"
              />

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button
                fullWidth
                variant="text"
                onClick={() => setIsLogin(false)}
              >
                Register
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography varient="h5">Register</Typography>
            <form onSubmit={handleRegisterSubmit}
              style={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar ? URL.createObjectURL(avatar) : ""}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    {/* <VisuallyHiddenInput type="file" /> */}
                    <VisuallyHiddenInput
                      type="file"
                      accept="image/"
                      onChange={handleAvatarChange}
                    />
                  </>
                </IconButton>
              </Stack>
              <TextField
                type="text"
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                type="email"
                required
                fullWidth
                label="email"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                type="password"
                required
                fullWidth
                label="password"
                margin="mormal"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Register
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button fullWidth variant="text" onClick={() => setIsLogin(true)}>
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
