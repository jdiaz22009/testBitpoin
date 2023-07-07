import {useNavigation, StackActions} from '@react-navigation/native';

export const useNavigator = () => {
  const navigation = useNavigation();

  const goToPage = (page: string, params?: object) => {
    const pushAction = StackActions.push(page, params ? params : {});
    navigation.dispatch(pushAction);
  };

  const replacePage = (page: string, params?: object) => {
    const replaceAction = StackActions.replace(page, params ? params : {});
    navigation.dispatch(replaceAction);
  };

  return {
    goToPage,
    replacePage,
  };
};
