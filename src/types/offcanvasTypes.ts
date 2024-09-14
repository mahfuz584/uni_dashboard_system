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
    onSemsterChange ?: (value: string, setValue: (name: string, value: any) => void) => void | any;
  };
 export interface ApiResponse {
    message: string;
    // Other properties can be added here if needed
  }
  