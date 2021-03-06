import { APIGet } from 'src/api/communicator';
import store from 'src/redux/store';
import { SetUserData } from 'src/redux/actions/user-actions';
import { RebuildData } from 'rrmc';

export const GetUserStands = (): Promise<any> => {
  return new Promise((res, rej) => {
    const user = store && store.getState().user &&
      store.getState().user.user &&
      store.getState().user.user.id ?
      store.getState().user.user : null;
    if ( !user ) return rej(new Error('no user'));
    const fields = 'name,slug,img_logo,average_rating';
    const url = `stands/?filter[owner]=${user.id}&page[number]=1&page[size]=6&fields[Stand]=${fields}`;
    APIGet(url, true)
      .then((response: any) => {
        const data = RebuildData(response).data;
        store.dispatch(SetUserData({
          userStands: data
        }));
        res(data);
      })
      .catch((error: any) => {
        rej(error);
      });
  });
};

export default GetUserStands;
