export interface UserFormDataDto {
    id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  phone: string;
  website: string;
  address: { street: string; city: string; zip: string };
  company: { name: string; position: string };
  description: string;
 
}
