import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && isNaN(+value) || value.length > 10) {
      return;
    }
    setFormData((prev) => ({...prev, [name]: value}))
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "10px",
        margin: "20px",
        padding: "20px",
        backgroundColor: " #b3e0ff",
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        width: '30vw'
      }}
    >
      <h1
        style={{
          textAlign: "center",
          width: "90%",
          margin: "0px auto",
          color: "#0077b3",
        }}
      >
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: "20px",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label
            style={{
              fontSize: "18px",
              color: "#0077b3",
              fontWeight: 300,
            }}
            htmlFor="name"
          >
            Name:{" "}
          </label>
          <input
            onChange={handleChange}
            required={true}
            value={formData.name}
            style={{
              width: "70%",
              padding: "8px 12px",
              borderRadius: "4px",
              outline: "none",
              border: "none",
              backgroundColor: "#ccffff",
              fontSize: "16px",
              color: "black",
            }}
            placeholder="Enter name here..."
            type="text"
            name="name"
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label
            style={{
              fontSize: "18px",
              fontWeight: 300,
              color: "#0077b3",
            }}
            htmlFor="email"
          >
            Email:{" "}
          </label>
          <input
            onChange={handleChange}
            value={formData.email}
            required={true}
            style={{
              width: "70%",
              padding: "8px 12px",
              borderRadius: "4px",
              outline: "none",
              border: "none",
              backgroundColor: "#ccffff",
              fontSize: "16px",
              color: "black",
            }}
            placeholder="Enter email address..."
            type="email"
            name="email"
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label
            style={{
              fontSize: "18px",
              color: "#0077b3",
              fontWeight: 300,
            }}
            htmlFor="mobile"
          >
            Mobile:{" "}
          </label>
          <input
            onChange={handleChange}
            value={formData.mobile}
            required={true}
            style={{
              width: "70%",
              padding: "8px 12px",
              borderRadius: "4px",
              outline: "none",
              border: "none",
              backgroundColor: "#ccffff",
              fontSize: "16px",
              color: "black",
            }}
            placeholder="Enter mobile no..."
            type="text"
            name="mobile"
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <input
            type="submit"
            name="Submit"
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              outline: "none",
              border: "none",
              backgroundColor: "#005580",
              fontSize: "16px",
              color: "white",
              margin: "auto",
            }}
          />
        </div>
      </form>
    </div>
  );
};


export default Login