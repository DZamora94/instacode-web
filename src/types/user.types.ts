export type User = {
  email: string;
  emoji: string;
  password: string;
  username: string;
  codes?: string[];
  favCodes?: string[];
  _id: string;
};

export type UserData = {
  user: User | null;
  token: string | null;
};
