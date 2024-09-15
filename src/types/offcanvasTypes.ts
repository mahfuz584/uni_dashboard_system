type TSlectOption = {
  label: string;
  value: string;
};
type TformFields = {
  label: string;
  type: string;
  options?: TSlectOption[];
  placeholder: string;
  name: string;
  rules: {
    required: string;
  };
};
export type TOfcanvasProps = {
  formFields: TformFields[];
  onSubmitApi: (data: any) => void;
  onSemsterChange?: (
    value: string,
    setValue: (name: string, value: any) => void
  ) => void | any;
};
export interface ApiResponse {
  data?: {
    success: boolean;
    message: string;
  };
  error?: {
    data?: {
      errorSources: {
        message: string;
      }[];
    };
  };
}
