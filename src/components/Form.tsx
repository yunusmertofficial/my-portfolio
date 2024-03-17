"use client";
import { MailIcon, User } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="İsim" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="E-posta adresi" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea id="content" placeholder="İçerik" />
        <User className="absolute right-6" size={20} />
      </div>
      <Button>
        <span>İletişime Geç</span>
      </Button>
    </form>
  );
};

export default Form;
