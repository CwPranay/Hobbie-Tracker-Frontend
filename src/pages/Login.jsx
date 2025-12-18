import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginUser } from "../api/authService";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(""); // clear error on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const data = await loginUser(form);

      localStorage.setItem("token", data.token);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome Back">
      {error && (
        <p className="mb-4 rounded-md bg-red-500/10 border border-red-500/30 px-3 py-2 text-sm text-red-400 text-center">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        <Button loading={loading} disabled={loading}>
          Login
        </Button>
      </form>

      {/* Register link */}
      <p className="mt-4 text-sm text-center text-zinc-400">
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="text-indigo-500 hover:text-indigo-400 font-medium"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
