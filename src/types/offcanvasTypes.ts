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
    open: boolean;
    formFields: TformFields[];
    onSubmitApi: (data: any) => void;
    onSemsterChange ?: (value: string, setValue: (name: string, value: any) => void) => void | any;
  };