import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "@tanstack/react-router";
const SignUpForm = () => {
  const form = useForm();
  const onSubmit = (data) => {};
  const loading = false; // Replace with actual loading state if needed

  return (
    <div>
      <Card className="w-[93dvw] md:w-[400px] mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-extrabold">
            Signup
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
                <Input label="Username" name="username" />
                <Input label="Password" name="password" />
                <Input label="Confirm Password" name="confirmPassword" />
              </FormProvider>
              <Button
                className="bg-[#d17a00] w-full text-white text-[16px]"
                disabled={loading}
              >
                {loading ? "pending..." : "Sign Up"}
              </Button>
            </form>
          </Form>
          <div className="mt-4">
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpForm;
