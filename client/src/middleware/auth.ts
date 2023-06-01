import { createListenerMiddleware } from '@reduxjs/toolkit';
import { authApi } from '../app/Services/auth';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();
    }
})