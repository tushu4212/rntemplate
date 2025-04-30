import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import Reactotron from '../../ReactotronConfig';


const rootReducer = combineReducers({
  //combine all reducers
//   auth: authSlice,
//   app: appSlice,
});
const store = configureStore({
  reducer: rootReducer,
  // enhancers: getDefaultEnhancers =>
  //   getDefaultEnhancers().concat((Reactotron as any).createEnhancer()),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
