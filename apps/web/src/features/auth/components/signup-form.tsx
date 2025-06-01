import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "@tanstack/react-router";
import { signupSchema } from "../schema";
import type { SignupType } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<SignupType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (data: SignupType) => {
    setLoading(true);
    await authClient.signUp
      .email(
        {
          email: data.email,
          name: data.name,
          password: data.password,
        },
        {
          onSuccess: async () => {
            await authClient.sendVerificationEmail({
              email: data.email,
              callbackURL: `${import.meta.env.VITE_APP_URL}/`,
            });
            toast.success(
              "Signup successful! Please check your email for verification."
            );
            form.reset();
          },
          onError: (error) => {
            console.error("Signup error:", error);
            toast.error("Signup failed. Please try again.");
          },
        }
      )
      .catch((error) => {
        console.error("Signup failed:", error);
        toast.error("Signup failed. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
                <Input label="Username" name="name" />
                <Input label="Password" name="password" type="password" />
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
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
