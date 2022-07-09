import { action, observable } from 'mobx';
import { persist } from 'mobx-persist';

export class AppStore {
    @persist @observable public language: 'en' = 'en'
    @persist @observable public theme: 'light' = 'light'

    afterHydration() {
    }
}

const appStore = new AppStore();

export { appStore };
