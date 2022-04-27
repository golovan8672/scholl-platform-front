import {configure} from 'mobx';
import Auth from '../stores/Auth/AuthStore';

configure({enforceActions: 'observed'});

export default function configureStore() {
  const AuthStore = new Auth();

  return {
    stores: {
      AuthStore
    }
  };
}