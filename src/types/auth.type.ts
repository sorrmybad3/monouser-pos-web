export type AuthContextType = {
  user: any;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
};

export type AuthResponse = {
  access_token: string;
};
