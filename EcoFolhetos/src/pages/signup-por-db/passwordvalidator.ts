import { FormGroup } from '@angular/forms';

export class passwordvalidator {
    static validate(form: FormGroup) {
        let password = form.controls.password.value;
        let repassword = form.controls.repassword.value;

      
        if (repassword !== password) {
            return {
                doesMatchPassword: true
            };
        }

        return null;

    }
}