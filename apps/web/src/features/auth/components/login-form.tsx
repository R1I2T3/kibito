import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "@tanstack/react-router";
const LoginForm = () => {
  const form = useForm();
  const onSubmit = (data) => {};
  const loading = false; // Replace with actual loading state if needed

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    // router.push("/forgot-password"); // If using Next.js
    // window.location.href = "/forgot-password"; // If not using Next.js
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
