import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if ((control.value as string).indexOf(' ') != -1)
      return { cannotContainSpace: true };

      return null;
  }

  static shouldBeUnique(control: AbstractControl) : ValidationErrors | null {
    if ((control.value === 'mosh')
      return { shouldBeUnique : true };
    return null;
  }
}
