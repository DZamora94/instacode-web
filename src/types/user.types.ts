export type User = {
  _id: string;
  codes?: string[];
  email: string;
  emoji: string;
  favCodes?: string[];
  password: string;
  username: string;
};

export type UserData = {
  token: string | null;
  user: User | null;
};
