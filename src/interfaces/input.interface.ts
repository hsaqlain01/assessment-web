export interface IInput {
  data?: { id: string; name: string }[];
  inputlable?: string;
  placeholder?: string;
  value: string;
  type?: string;
  name: string;
  onChangeHandler: (e: any) => void;
  error?: any;
  lableColor?: boolean;
}
