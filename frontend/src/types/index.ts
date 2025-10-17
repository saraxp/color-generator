export interface Color {
  name: string;
  formats: {
    hex: string;
    rgb: string;
    hsl: string;
  };
  locked: boolean;
}