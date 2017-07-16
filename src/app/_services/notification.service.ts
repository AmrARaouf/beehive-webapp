import { Injectable } from '@angular/core';

import { environment } from '@env/environment';

@Injectable()
export class NotificationService {
    private errorMessage: string;

    setErrorMessage(error: string): void {
        this.errorMessage = error;
    }

    getErrorMessage(): string {
        return this.errorMessage;
    }

    clearErrorMessage(): void {
        this.errorMessage = null;
    }
}
