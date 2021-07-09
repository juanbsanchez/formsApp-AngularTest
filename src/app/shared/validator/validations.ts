import { FormControl } from "@angular/forms";

export const nameSurnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

export const emailPattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const invalidUsername = (control: FormControl) => {
  const value: string = control.value?.trim().toLowerCase();
  if (value === 'john') {
    return {
      noJohn: true
    }
  }
  return null;
}

