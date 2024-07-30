interface registerUserProps {
  username: string;
  email: string;
  phone?: string | null;
  password: string;
  re_password: string;
}

export type { registerUserProps };
