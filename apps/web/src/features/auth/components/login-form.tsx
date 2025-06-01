import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "@tanstack/react-router";
import { loginSchema } from "../schema";
import type { LoginType } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: LoginType) => {
    setLoading(true);
    await authClient.signIn
      .email(
        {
          email: data.email,
          password: data.password,
        },
        {
          onError: (ctx) => {
            // Handle the error
            if (ctx.error.status === 403) {
              toast.error("Please verify your email address");
            } else {
              //you can also show the original error message
              toast.error(ctx.error.message);
            }
          },
          onSuccess: () => {
            toast.success("Login successful");
            navigate({
              to: "/",
              replace: true,
            });
          },
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Card className="w-[93dvw] md:w-[400px] mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-extrabold">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="w-full space-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormProvider {...form}>
                <Input label="Email" name="email" />
                <Input label="Password" name="password" />
              </FormProvider>
              <div className="flex justify-end">
                <Link to={"/forgot_password"} className="text-blue-500">
                  Forgot Password?
                </Link>
              </div>
              <Button
                className="bg-[#d17a00] w-full text-white text-[16px]"
                disabled={loading}
              >
                {loading ? "pending..." : "Sign In"}
              </Button>
            </form>
          </Form>
          <div className="mt-4">
            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
