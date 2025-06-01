import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { resetPasswordSchema } from "../schema";
import type { ResetPasswordType } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useNavigate } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
const ResetPasswordForm = ({ token }: { token: string }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useForm<ResetPasswordType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (data: ResetPasswordType) => {
    setLoading(true);
    await authClient
      .resetPassword(
        {
          newPassword: data.password,
          token,
        },
        {
          onSuccess: () => {
            toast.success("Password Updated Successfully");
            navigate({
              to: "/login",
              replace: true,
            });
          },
          onError: () => {
            toast.error("Failed to Update password");
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
            Reset Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="w-full space-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormProvider {...form}>
                <Input label="New Password" name="password" />
                <Input label="Confirm Password" name="confirmPassword" />
              </FormProvider>

              <Button
                className="bg-[#d17a00] w-full text-white text-[16px]"
                disabled={loading}
              >
                {loading ? "pending..." : "Reset Password"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordForm;
