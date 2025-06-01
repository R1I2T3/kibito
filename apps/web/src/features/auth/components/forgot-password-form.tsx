import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import { forgotPasswordSchema } from "../schema";
import type { ForgotPasswordType } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (data: ForgotPasswordType) => {
    setLoading(true);
    await authClient
      .forgetPassword(
        {
          email: data.email,
          redirectTo: `${import.meta.env.VITE_APP_URL}/reset-password`,
        },
        {
          onSuccess: () => {
            form.reset();
            toast.success(
              "Forgot password verification Mail send successfully"
            );
          },
          onError: (payload) => {
            toast.error(
              `Error: ${payload.error.message || "Failed To Send Message"}`
            );
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
            Forgot Password
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
              </FormProvider>
              <Button
                className="bg-[#d17a00] w-full text-white text-[16px]"
                disabled={loading}
              >
                {loading ? "pending..." : "Send Reset Link"}
              </Button>
            </form>
          </Form>
          <div className="mt-4">
            <p className="text-center">
              Back to{" "}
              <Link to="/login" className="text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordForm;
