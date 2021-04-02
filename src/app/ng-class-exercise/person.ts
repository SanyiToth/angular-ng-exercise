export interface Person {
  fullName: string;
  dateOfBirth: Date | number | null;
  gender: 'female' | 'male';
  checkedIn: boolean;
}
