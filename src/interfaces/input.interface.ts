export interface IInput {
  data?: { id: string; name: string }[];
  inputLabel?: string;
  placeholder?: string;
  value: string;
  type?: string;
  rows?: number;
  name: string;
  onChangeHandler: (e: any) => void;
  error?: any;
  lableColor?: boolean;
}
