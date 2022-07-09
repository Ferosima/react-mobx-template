import { action, observable } from 'mobx';
import { persist } from 'mobx-persist';
import { TUser } from 'src/common/types/user';

export class UserStore {
    @persist @observable public isLogged: 'en' = 'en'
    @persist @observable public user: TUser | null = null

    afterHydration() {
    }
}

const userStore = new UserStore();

export { userStore };
